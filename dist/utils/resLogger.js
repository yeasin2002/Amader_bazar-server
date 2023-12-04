"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqLogger = void 0;
const reqLogger = (req, res, next) => {
    const start = Date.now();
    console.log(req.ip);
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration} ms`);
    });
    next();
};
exports.reqLogger = reqLogger;
//# sourceMappingURL=resLogger.js.map