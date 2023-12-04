"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experiment = void 0;
const crypto_1 = require("crypto");
const utils_1 = require("../../utils");
const experiment = async (req, res) => {
    try {
        const id = (0, crypto_1.randomUUID)();
        const count = 0;
        if (count === 0)
            (0, utils_1.createPrettyError)(401, "This is a test error");
        return (0, utils_1.successResponse)({ res, data: id });
    }
    catch (error) {
        console.log(error?.message);
        (0, utils_1.errorResponse)({ res, message: error?.message });
    }
};
exports.experiment = experiment;
//# sourceMappingURL=experiment.js.map