const jwt = require("jsonwebtoken")

const generateJWT = (data = {}, key, option = { expiresIn: "30d" }) => {
    return jwt.sign(data, key, option)
}

module.exports = generateJWT
