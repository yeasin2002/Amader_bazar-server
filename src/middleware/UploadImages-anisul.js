const path = require(`path`);
const multer = require(`multer`);
const createHttpError = require(`http-errors`);

const config = {
    destination: `static/user/`,
    maxFile: 2097152, // 2MB
    allowedFile: [`png`, `jpeg`, `jpg`],
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, config.destination);
    },
    filename: function (req, file, cb) {
        const extName = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${extName}`);
    },
});

const fileTypeFilter = (req, file, cb) => {
    const extName = path.extname(file.originalname);
    if (!config.allowedFile.includes(extName.substring(1))) {
        return createHttpError(409, `File type not supported`);
    } else {
        return cb(null, true);
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: config.maxFile },
    fileTypeFilter,
});
module.exports = upload;
