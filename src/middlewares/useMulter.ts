import { randomUUID } from "crypto";
import fs from "fs";
import multer from "multer";
import path from "path";
import { createPrettyError } from "../utils";

// !
export const SendSingleImg = (imgUrlFromReq: string, imgPath: string) => {
    const local = path.join(process.cwd(), `uploads/${imgPath}`, imgUrlFromReq);
    if (!fs.existsSync(local)) return createPrettyError(404, "Image not found");
    return local;
};

export const CreateDiskStorage = (relativePath = "default") => {
    const id = randomUUID();

    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(process.cwd(), `uploads/${relativePath}`));
        },
        filename: function (req, file, cb) {
            const slugName =
                file.originalname.split(" ").join("-").toLowerCase() ||
                file.originalname;
            const GeneratedFileName = `${id}-${slugName}`;

            cb(null, GeneratedFileName);
        },
    });
};
// export const upload = multer({ storage: CreateDiskStorage() });
