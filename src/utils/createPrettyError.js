class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode; 
        this.name = `HttpError`;
    }
}

const createPrettyError = (statusCode = 500, message) => {
    throw new HttpError(statusCode, message);
};

module.exports = createPrettyError;
