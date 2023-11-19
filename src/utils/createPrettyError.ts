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
    firstParams?: string | number,
    secondParams?: string | number
) => {
    if (typeof firstParams === "string" && typeof secondParams === "number") {
        throw new HttpError(secondParams, firstParams);
    }
    if (typeof firstParams === "number" && typeof secondParams === "string") {
        return new HttpError(firstParams, secondParams);
    } else {
        console.log("Error : createPrettyError");
        return new HttpError(500, "Internal Server Error");
    }
};
