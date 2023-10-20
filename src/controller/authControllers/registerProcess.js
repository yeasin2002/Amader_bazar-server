const createHttpError = require(`http-errors`);
const UserModel = require(`../../model/UserModel`);
const { successResponse, errorResponse } = require(
    `../../utils/ResponseHandler`,
);
const generateJWT = require(`../../utils/GenerateJWT`);
const { ClientUrl } = require(`../../utils/exportEnv`);
// const sendEmailToRegisterUser = require(`../../helper/email`);
const kleur = require(`kleur`);
const SendMail = require(`../../helper/SendMailer`);

const registerProcess = async (req, res) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const { name, email, password, phone, address } = req.body;
        if (!name || !email || !password || !phone || !address)
            throw createHttpError(409, `Provide all the information`);

        const isExist = await UserModel.exists({ email });
        if (isExist) throw createHttpError(409, `Email already exist`);

        const token = await generateJWT({
            data: req.body,
        });

        // email data
        const emailData = await {
            revivers: [email],
            Subject: `Account Activation Link`,
            html: `
          <h1>Please use the following to  activate your account</h1>
          <a href=${ClientUrl}/user/activate/${token}>
          Click To log in
          </a>
        `,
        };

        /**
         * !deprecated
         *? await sendEmailToRegisterUser(emailData);
         */
        await SendMail(emailData);

        await successResponse(res, {
            message: `User Registered`,
            data: token,
        });
    } catch (error) {
        console.log(kleur.bgRed().white(`${error.message}`));

        errorResponse(res, {
            message: error.message,
            statusCode: error.status,
        });
    }
};
module.exports = registerProcess;
