const { errorResponse } = require("$utils/ResponseHandler");
const SendSingleImg = require("$services/SendSingleImg");

const getCategoryImage = async (req, res) => {
    try {
        const local = SendSingleImg(req.params.url, "category");
        res.sendFile(local);
        console.log("local");
    } catch (error) {
        console.log("log :", error.message);
        errorResponse(res, {
            statusCode: error.statusCode || 404,
            message: error.message,
        });
    }
};
module.exports = getCategoryImage;
