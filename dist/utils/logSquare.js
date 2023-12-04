"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSquare = void 0;
const kleur_1 = __importDefault(require("kleur"));
const success = (icon, txt) => {
    console.log(icon, kleur_1.default.bgGreen().white().bold(`${txt}`));
};
exports.logSquare = {
    success,
};
//# sourceMappingURL=logSquare.js.map