const { errorResponse } = require("$utils/ResponseHandler");
const { SendSingleImg } = require("$utils/multerImageHandler");

const getProductImg = async (req, res) => {
    try {
        const local = SendSingleImg(req.params.url, "products");
        res.sendFile(local);
    } catch (error) {
        console.log("log :", error.message);
        errorResponse(res, {
            statusCode: error.statusCode || 404,
            message: error.message,
        });
    }
};
module.exports = getProductImg;
