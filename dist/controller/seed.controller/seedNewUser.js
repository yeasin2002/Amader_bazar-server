"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedNewUser = void 0;
const user_1 = require("../../data/demo/user");
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const responseHandler_1 = require("../../utils/responseHandler");
const seedNewUser = async (req, res) => {
    try {
        console.log("Seed User");
        const newUsers = await model_1.User.insertMany(user_1.demoUser);
        console.log(newUsers);
        if (!newUsers)
            (0, utils_1.createPrettyError)(404, "Failed to create Demo Data");
        return (0, responseHandler_1.successResponse)({
            res,
            message: "Created Demo Data",
            data: newUsers,
        });
    }
    catch (error) {
        console.log(error.message);
        (0, responseHandler_1.errorResponse)({ res, message: error.message });
    }
};
exports.seedNewUser = seedNewUser;
//# sourceMappingURL=seedNewUser.js.map