import { validateUserPayload } from "../middleware/request";
import UserError from "../domain/errs/sampleErrs";
import { Users } from "../models/users";
import express from "express";
import { logger } from "../config/utils/logger";
const router = express.Router(); 

router.get("/meta/:email", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { email } = req.params;
        if (!email) throw new UserError("Email is required", 400, "ValidationError");

        const _users = new Users({ email });
        const result = await _users.getUserMeta()
        res.json(result)
    } catch (error) {
        if (error instanceof UserError) { res.json(error.toJSON()) }
        else next(UserError.INTERNAL_SERVER_ERROR);
    }
});

router.patch("/details/profile", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { authedUser, password, phone_number, display_name } = req.body;
        if (!authedUser || !phone_number || !password) throw UserError.INVALID_REQUEST_BODY;

        const _users = new Users({
            password,
            phoneNumber: phone_number,
            displayName: display_name,
            customer_id: authedUser?.data.customer_id,
            ticket_ids: authedUser?.data.ticket_ids,
            email: authedUser?.data.email,
            role: authedUser?.data.role,
            uid: authedUser.uid,
        });
        const result = await _users.updateUserAccountProfile(password, authedUser?.uid);
        res.json(result)
    }
    catch (error) {
        if (error instanceof UserError) {
            res.status(404).json(error.toJSON())
        }
        else next(UserError.INTERNAL_SERVER_ERROR);
    }
})

router.delete("/:uid", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { uid } = req.params;
        if (!uid) throw UserError.INVALID_REQUEST_BODY;

        const _users = new Users({ uid });
        const result = await _users.deleteUser();
        res.json(result)
    }
    catch (error) {
        if (error instanceof UserError) {
            res.status(404).json(error.toJSON())
        }
        else next(UserError.INTERNAL_SERVER_ERROR);
    }
})


export default router;