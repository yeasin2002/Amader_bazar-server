const express = require("express");
const extraRoute = express.Router();

extraRoute.get("/img", (req, res) => {
    res.json({
        status: "Done",
    });
});

module.exports = extraRoute;
