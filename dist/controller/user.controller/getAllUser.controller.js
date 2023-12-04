"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = void 0;
const model_1 = require("../../model");
const utils_1 = require("../../utils");
const getAllUser = async (req, res) => {
    try {
        const { limit = 100, page = 0 } = req.body;
        const data = await model_1.User.find({}).limit(limit).skip(page);
        if (!data)
            (0, utils_1.createPrettyError)(404, "could't find any user");
        (0, utils_1.successResponse)({ res, data, message: "Found all users" });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.getAllUser = getAllUser;
//# sourceMappingURL=getAllUser.controller.js.map