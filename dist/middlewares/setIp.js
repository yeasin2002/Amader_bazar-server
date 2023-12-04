"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setIp = void 0;
const setIp = (req, res, next) => {
    req.body.ip = req.ip;
    next();
};
exports.setIp = setIp;
//# sourceMappingURL=setIp.js.map