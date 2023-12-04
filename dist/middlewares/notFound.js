"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const utils_1 = require("../utils");
const notFound = async (req, res) => {
    try {
        (0, utils_1.errorResponse)({ res, message: "404 Not Found", statusCode: 404 });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.notFound = notFound;
//# sourceMappingURL=notFound.js.map