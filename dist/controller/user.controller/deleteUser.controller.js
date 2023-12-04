"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model_1.User.findOneAndDelete({ id });
        if (!data)
            (0, utils_1.createPrettyError)(404, "Unable to delete this user");
        (0, utils_1.successResponse)({
            res,
            message: `User Deleted with ${id} ID `,
            data,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=deleteUser.controller.js.map