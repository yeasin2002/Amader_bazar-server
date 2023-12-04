"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeklyNewsletterConfirm = void 0;
const utils_1 = require("../../utils");
const weeklyNewsletterConfirm = async (req, res) => {
    try {
        const { email } = req.body;
        await (0, utils_1.sendMailWithNodemailer)({
            receivers: email,
            subject: "Weekly Newsletter Subscription",
            html: `<h1>Thanks for subscribing to our weekly newsletter</h1>`,
        });
        (0, utils_1.successResponse)({ res, message: "Thanks,Check your email" });
    }
    catch (error) {
        console.log(error.message);
        (0, utils_1.errorResponse)({ res });
    }
};
exports.weeklyNewsletterConfirm = weeklyNewsletterConfirm;
//# sourceMappingURL=weeklyNewsletterConfirm.controller.js.map