const jwt = require("jsonwebtoken")
const { jwtSecretKey } = require("./exportEnv")

const generateJWT = ({
    data = {},
    key = jwtSecretKey,
    option = { expiresIn: "30d" },
}) => {
    return jwt.sign(data, key, option)
}

module.exports = generateJWT
