"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectContactInfo = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const CollectContactInfo = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const contact = await model_1.Contact.create({ name, email, subject, message });
        if (!contact) {
            return (0, utils_1.errorResponse)({
                res,
                statusCode: 400,
                message: `Unable to save contact info`,
            });
        }
        (0, utils_1.successResponse)({ res, message: `Contact info saved successfully` });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.CollectContactInfo = CollectContactInfo;
//# sourceMappingURL=contact.controller.js.map