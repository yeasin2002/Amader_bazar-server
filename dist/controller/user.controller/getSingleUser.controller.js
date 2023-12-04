"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleUser = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getSingleUser = async (req, res) => {
    try {
        const theUser = await model_1.User.findById(req.params.id);
        if (!theUser)
            (0, utils_1.createPrettyError)(404, "No user found, Unable to find the user");
        (0, utils_1.successResponse)({ res, data: theUser, message: "Got the user data" });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.getSingleUser = getSingleUser;
//# sourceMappingURL=getSingleUser.controller.js.map