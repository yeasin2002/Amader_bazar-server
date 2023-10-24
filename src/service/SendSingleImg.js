const fs = require("fs");
const path = require("path");
const { createPrettyError } = require("$utils");

const SendSingleImg = (imgUrlFromReq, imgPath) => {
    const local = path.join(process.cwd(), `uploads/${imgPath}`, imgUrlFromReq);
    if (!fs.existsSync(local)) return createPrettyError(404, "Image not found");
    return local;
};

module.exports = SendSingleImg;
