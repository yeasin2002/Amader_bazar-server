//

const { kleur } = require("$npmModules");
// eslint-disable-next-line no-unused-vars
const lastErrorHandler = (err, req, res, next) => {
    console.log(kleur.bgRed().white().bold(`Error: ${err.message} `));
    return res.status(500).json({
        status: `failed`,
        message: `Something went wrong`,
        error: err.message,
    });
};

module.exports = lastErrorHandler;
