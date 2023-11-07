class HttpError extends Error {
    public statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.name = `HttpError`;
    }
}

export const createPrettyError = (
    message = "Internal Server Error",
    statusCode = 500
) => {
    throw new HttpError(statusCode, message);
};
