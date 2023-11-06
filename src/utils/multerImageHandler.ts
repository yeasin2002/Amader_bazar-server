import { fs, multer, path, uuid } from "../npmModules";
import { createPrettyError } from "../utils";

export const SendSingleImg = (imgUrlFromReq: string, imgPath: string) => {
    const local = path.join(process.cwd(), `uploads/${imgPath}`, imgUrlFromReq);
    if (!fs.existsSync(local)) return createPrettyError(404, "Image not found");
    return local;
};

export const storeImageInServer = (relativePath: string) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            return cb(
                null,
                path.join(process.cwd(), `uploads/${relativePath}`)
            );
        },
        filename: function (req, file, cb) {
            const slugName =
                file.originalname.split(" ").join("-").toLowerCase() ||
                file.originalname;

            const GeneratedFileName = `${uuid.v4()}-${slugName}`;
            return cb(null, GeneratedFileName);
        },
    });
};


