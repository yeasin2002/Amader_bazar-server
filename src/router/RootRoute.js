const rootRoute = (req, res) => {
    res.json({
        status: "success",
        message: "Hello World",
    })
}

module.exports = rootRoute
