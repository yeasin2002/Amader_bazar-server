const { existsSync } = require("fs");
const path = require("path");

module.exports = async function (req, res, next) {
    try {
        const local = path.join(__dirname, "../../static/", req.params.name);
        if (existsSync(local)) return res.sendFile(local);
        res.status(404).json({ message: "File not found", code: "NOT FOUND" });
    } catch (error) {
        next(error);
    }
};
