// const http = require("http");

class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = "HttpError";
    }
}

const createPrettyError = ({ statusCode, message }) => {
    throw new HttpError(statusCode, message);
};

module.exports = createPrettyError;
