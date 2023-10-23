const { ProductCategory } = require("$model");

const getSingleCategory = async (req, res) => {
    try {
        const data = await ProductCategory.findById(req.params.id);
        res.status(200).json({ status: "success", data });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: "failed", message: "" });
    }
};
module.exports = getSingleCategory;
