const { createPrettySlug } = require("$utils/index");
const multer = require("multer");
const path = require("path");

const uploadImageByMulter = ({ destinationName = "" }) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            return cb(
                null,
                path.join(process.cwd(), `uploads/${destinationName}`)
            );
        },
        filename: function (req, file, cb) {
            const GeneratedFileName = `${Date.now()}-${createPrettySlug(
                file.originalname
            )}`;
            return cb(null, GeneratedFileName);
        },
    });
};

module.export = uploadImageByMulter;
