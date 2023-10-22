const getUser = (req, res) => {
    res.json({
        message: "Dashboard",
        user: req.user,
    });
};

module.exports = getUser;
