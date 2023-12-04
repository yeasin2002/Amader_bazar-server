"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllUser = void 0;
const model_1 = require("../../model");
const responseHandler_1 = require("../../utils/responseHandler");
const removeAllUser = async (req, res) => {
    try {
        const deletedUser = await model_1.User.deleteMany({});
        await (0, responseHandler_1.successResponse)({
            res,
            message: "Cleared all user",
            data: deletedUser,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, responseHandler_1.errorResponse)({ res, message: error.message });
    }
};
exports.removeAllUser = removeAllUser;
//# sourceMappingURL=removeAllUser.js.map