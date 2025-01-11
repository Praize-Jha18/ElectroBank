import { DATABASE_CONN } from "../config/database";
import { IUsers, IUsersModel } from "../interface/sample";
import { COLLECTIONS } from "../config/utils/constants";
import { logger } from "../config/utils/logger";
import UserError from "../domain/errs/sampleErrs";
import destr from 'destr'


class Users implements IUsersModel {
    db = DATABASE_CONN.collection(COLLECTIONS.WINNER_COLLECTION);

    token = ""
    uid = ""
    email = ""
    password = ""
    displayName = ""
    phoneNumber = ""

    lastName = ""
    firstName = ""
    customer_id = ""
    role = ""
    ticket_ids = "" //a stringified array of ticket ids

    constructor(userPayload: Partial<IUsers> = {}) {
        this.firebase = FIREBASE.auth;
        this.updateValue(userPayload);
    }

    updateValue(userPayload: Partial<IUsers>) {
        for (let field in userPayload) {
            if (field !== null && field in this && field in userPayload) {
                (this as any)[field] = userPayload[field as keyof IUsers]
            }
        }
        return this;
    }

    get getDocValues() {
        return {
            role: this.role,
            password: this.password,
            first_name: this.firstName,
            last_name: this.lastName,
            phone_number: this.phoneNumber,
            displayName: this.displayName,
            customer_id: this.customer_id,
            email: this.email
        }
    }

    async getUserMeta() {
        const user = await this.firebase.getUserByEmail(this.email);
        const user_onboarded = await this.getTardisCustomer();
        
        if (!user_onboarded[0]?.onboarded) {
            throw new UserError("User not onboarded", 404, "AuthorizationError")
        }
        return { ...user.customClaims as any || {}, user_id: user.uid, user }
    };


    async getAllUsers() {
        const users = await this.firebase.listUsers();
        const response = extractUserFields(users.users, this.uid);

        return response;
    }

    async setUserMeta(uid: string) {
        try {
            let meta = { ...this.getDocValues }
            await this.firebase.setCustomUserClaims(uid, meta);

            return await this.getAllUsers();
        } catch (error) {
            logger.error({ setUserMeta_Err: error })
        }
    }


    async updateUserTicketMeta() {
        try {
            const meta = await this.getUserMeta();
            const existing_ids = destr<any>(meta?.user_meta.ticket_ids) || [];
            logger.info({ existing_ids })
            const ticket_ids = JSON.stringify([...existing_ids, this.ticket_ids]);
            logger.info({ stringified_T_IDs: ticket_ids })
            logger.info("new meta: ", { ...meta, ticket_ids })

            await this.firebase.setCustomUserClaims(this.uid, { ...meta, ticket_ids });
        } catch (error) {
            logger.error({ updateUserTicketMeta_Err: error })
        }
    }

    async createUserAccount() {
        const userDoc = { ...this.getDocValues, displayName: this.firstName + this.lastName };
        const res = await this.firebase.createUser(userDoc).catch(e => { throw UserError.USER_CREATION_FAILED })
        logger.info({ res })
        if (res.uid) {
            await this.setUserMeta(res.uid);
            return await this.getAllUsers();

        }
    }

    async updateUserAccountMeta() {
        const userDoc = { ...this.getDocValues };
        const res = await this.firebase.updateUser(this.uid, userDoc).catch(e => { throw UserError.USER_CREATION_FAILED })
        logger.info({ res })
        if (res.uid) {
            await this.setUserMeta(res.uid);
            return await this.getAllUsers();
        }
    }

    async updateUserAccountProfile(password: string, uid: string) {
        try {
            let meta = { ...this.getDocValues }
            logger.info({ meta })
            await this.firebase.updateUser(uid, { password, phoneNumber: meta.phone_number })
            await this.firebase.setCustomUserClaims(uid, meta)
            return await this.getUserMeta();
        } catch (error: any) {
            logger.error({ setUserProfile_Err: error })
            return new UserError(error.message, error.code, 'UpdateError')
        }
    }

    async disableUser() {
        await this.firebase.updateUser(this.uid, { disabled: true });
        return [];
        // return await this.getAllUsers();
    }

    async enableUser() {
        await this.firebase.updateUser(this.uid, { disabled: false });
        return [];
        // return await this.getAllUsers();
    }

    async deleteUser() {
        await this.firebase.deleteUser(this.uid);
        return await this.getAllUsers();
    }

    async verifyAuthToken() {
        const decoded = await this.firebase.verifyIdToken(this.token);
        if (decoded.uid === this.uid) return true;
        return false;
    }

    async getAllUserTardisID() {
        const filter = [
            { $match: { "_id": { $exists: true } } },
            {
                $project: {
                    // _id: { $toString: "$_id" },
                    _id: "$customer",
                    customer: "$name"
                }
            }
        ]
        return await this.tardis.aggregate(filter).toArray();
    }

    async getTardisCustomer() {
        const filter = [
            { $match: { "customer": this.customer_id } },
            {
                $project: {
                    onboarded: "$onboarded"
                }
            }
        ]
        return await this.tardis.aggregate(filter).toArray();
    }
}

export { Users };