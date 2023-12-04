"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDiskStorage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
const CreateDiskStorage = (relativeFolderPath) => {
    return multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path_1.default.join(process.cwd(), `uploads/${relativeFolderPath}`));
        },
        filename: function (req, file, cb) {
            const slugName = file.originalname.split(" ").join("-").toLowerCase() ||
                file.originalname;
            const id = (0, utils_1.generateOTP)();
            const GeneratedFileName = `${id}-${slugName}`;
            cb(null, GeneratedFileName);
        },
    });
};
exports.CreateDiskStorage = CreateDiskStorage;
// export const upload = multer({ storage: CreateDiskStorage() });
// export const SendSingleImg = (imgUrlFromReq: string, imgPath: string) => {
//     const local = path.join(
//         process.cwd(),
//         `uploads/users/${imgPath}`,
//         imgUrlFromReq
//     );
//     if (!fs.existsSync(local)) return createPrettyError(404, "Image not found");
//     return local;
// };
//# sourceMappingURL=multerHandler.js.map