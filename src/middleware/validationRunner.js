const createHttpError = require(`http-errors`);
const { validationResult } = require(`express-validator`);
const { kleur } = require("$npmModules/index");

const validationRunner = async (req, res, next) => {
    try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const ErrorPaths = errors.array().map((err) => err.path);
            const errorMsg = errors.array().map((err) => err.msg);
            console.log(kleur.bgRed().white().bold(errorMsg));

            return res.status(400).tson({
                status: `failed`,
                message: `${ErrorPaths} are not validated `,
                error: errorMsg,
            });
        }
        next();
    } catch (error) {
        console.log(kleur.bgRed().white().bold(error.message));
        createHttpError(500, `Internal Server Error -  Validation Failed`);
    }
};
module.exports = validationRunner;
