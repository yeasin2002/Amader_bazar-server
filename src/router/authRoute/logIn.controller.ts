export const logIn = async (req, res) => {
    try {
        res.status(200).json({ status: "success", data: "" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: "failed", message: "" });
    }
};
