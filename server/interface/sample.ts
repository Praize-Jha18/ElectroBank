import { ChangeStream, ChangeStreamDocument, ObjectId } from "mongodb";

export interface IUsers {
    token?: string
    uid?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber: string
    customer_id: string
    role: string
    ticket_ids: string
    displayName?: string
}

export interface IUsersModel {
    token: string
    uid: string
    email: string
    password: string
    displayName: string
    firstName: string
    lastName: string
    phoneNumber: string
    customer_id: string
    role: string
    ticket_ids: string

    deleteUser: () => Promise<object[]>
    enableUser: () => Promise<object[]>
    disableUser: () => Promise<object[]>
    getAllUsers: () => Promise<any[]>
    createUserAccount: () => Promise<any | null>
    getAllUserTardisID: () => Promise<any[] | []>
    getUserMeta: () => Promise<{
        user_meta: {
            [key: string]: any;
        } | any;
        user_id: string;

    } | undefined>
    setUserMeta:(uid: string) => Promise<{ uid: any; email: any; displayName: any; phoneNumber: any; disabled: any; creationTime: any; }[] | undefined>
}

export interface UserRecords {
    uid: string
    email: string
    displayName: string
    phoneNumber: string
    disabled: false
    creationTime: string
}