const userModel = require("../../model/UserModel")
const jwt = require("jsonwebtoken")
const { jwtSecretKey } = require("../../utils/exportEnv")
const createHttpError = require("http-errors")
const kleur = require("kleur")

const userVerify = async (req, res) => {
    try {
        const token = req.body.token
        console.log(kleur.bgBlue(`   req.params`, token))

        const decoded = await jwt.verify(token, jwtSecretKey)

        const checkIsExist = await userModel.exists({ email: decoded.email })
        if (checkIsExist) throw createHttpError(401, "User already exist")

        // ⁡⁣⁣⁢ create user and sent response⁡
        const newUser = await userModel.create(decoded)
        await newUser.save()

        await res.status(200).json({
            status: "success",
            message: "User was Created successfully ",
            ProvidedToken: token,
        })
    } catch (error) {
        console.log(kleur.red(error.message))
        res.status(500).json({ status: "failed", message: error.message })
    }
}
module.exports = userVerify
