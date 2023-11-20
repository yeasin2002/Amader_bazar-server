/* eslint-disable @typescript-eslint/no-unused-vars */
class HttpError extends Error {
    statusCode: number;
    message: string;
    name: string;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.name = `HttpError`;
    }
}
//! Bug - Not Throwing Error
export const createPrettyError = (
    statusCode = 500,
    message = "Internal Server Error"
) => {
    // new HttpError(statusCode, message);
    throw new Error(message);
};
