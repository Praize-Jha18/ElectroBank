class SampleError extends Error {
    code: number;
    type: string;

    constructor(message: string, code: number, type: string) {
        super(message);
        this.code = code;
        this.type = type;
    }

    // Predefined errors for user operations
    static DATABASE_CONNECTION = new SampleError(
        "Unable to connect to the user database",
        500,
        "DatabaseError"
    );

    static UNAUTHORIZED_ACCESS = new SampleError(
        "You are not authorized to perform this operation",
        403,
        "AuthorizationError"
    );

    static USER_NOT_ONBOARDED = new SampleError(
        "User not onboarded",
        403,
        "AuthorizationError"
    );

    static INVALID_REQUEST_BODY = new SampleError(
        "Failed to validate request body",
        400,
        "ValidationError"
    );

    static INVALID_EMAIL = new SampleError(
        "Email is required",
        400,
        "ValidationError"
    );

    static USER_CREATION_FAILED = new SampleError(
        "Failed to create user account",
        400,
        "CreationError"
    );

    static USER_DELETION_FAILED = new SampleError(
        "Failed to delete user account",
        400,
        "DeletionError"
    );

    static USER_NOT_FOUND = new SampleError(
        "User not found",
        404,
        "NotFoundError"
    );

    static USERS_NOT_FOUND = new SampleError(
        "Users were not found",
        404,
        "NotFoundError"
    );

    static USER_UPDATE_FAILED = new SampleError(
        "Failed to update user account",
        400,
        "UpdateError"
    );

    static USER_ENABLE_FAILED = new SampleError(
        "Failed to enable user account",
        400,
        "EnableError"
    );

    static USER_DISABLE_FAILED = new SampleError(
        "Failed to disable user account",
        400,
        "DisableError"
    );

    static INTERNAL_SERVER_ERROR = new SampleError(
        "An unexpected error occurred",
        500,
        "ServerError"
    );

    static TARDIS_ID_FETCH_FAILED = new SampleError(
        "Failed to fetch user's TardisID",
        500,
        "FetchError"
    );

    // Map Firebase error codes to SampleError
    static fromFirebaseError(error: any): SampleError {
        switch (error.code) {
            case 'auth/email-already-exists':
                return new SampleError(
                    "A user with this email already exists",
                    409,
                    "CreationError"
                );
            case 'auth/user-not-found':
                return SampleError.USER_NOT_FOUND;
            case 'auth/invalid-password':
                return new SampleError(
                    "Invalid password",
                    401,
                    "AuthenticationError"
                );
            case 'auth/insufficient-permission':
                return SampleError.UNAUTHORIZED_ACCESS;
            case 'auth/internal-error':
                return SampleError.INTERNAL_SERVER_ERROR;
            default:
                return new SampleError(
                    `Firebase Error: ${error?.message}`,
                    500,
                    "ServerError"
                );
        }
    }

    // Map MongoDB error codes to SampleError
    static fromMongoError(error: any): SampleError {
        switch (error.code) {
            case 'ESERVFAIL':
                return SampleError.DATABASE_CONNECTION;
            default:
                return new SampleError(
                    `MongoDB Error: ${error?.message}`,
                    500,
                    "DatabaseError"
                );
        }
    }

    toJSON(): { error: { message: string; code: number; type: string } } {
        return {
            error: {
                message: this.message,
                code: this.code,
                type: this.type,
            },
        };
    }
}

export default SampleError;