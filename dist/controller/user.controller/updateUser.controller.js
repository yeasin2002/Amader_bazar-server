"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await model_1.User.findOneAndUpdate({ id }, { $set: req.body }, { new: true });
        if (!updatedUser)
            (0, utils_1.createPrettyError)(401, "Unable to find the user with this ID");
        (0, utils_1.successResponse)({
            res,
            data: updatedUser,
            message: `Unable to update user `,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.controller.js.map