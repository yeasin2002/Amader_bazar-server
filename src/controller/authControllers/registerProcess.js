const kleur = require(`kleur`);
const { UserModel } = require(`$model`);
const { successResponse, errorResponse } = require(`$utils/ResponseHandler`);
const { generateJWT, createPrettyError } = require(`$utils`);
const { ClientUrl } = require(`$utils/exportEnv`);
const SendMail = require(`../../helper/SendMailer`);

const registerProcess = async (req, res) => {
    try {
        // eslint-disable-next-line no-unused-vars
        const { name, email, password, phone, address, image } = req.body;
        if (!name || !email || !password || !phone || !address)
            throw createPrettyError(409, `Provide all the information`);

        const isExist = await UserModel.exists({ email });
        if (isExist) throw createPrettyError(409, `Email already exist`);

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

        await SendMail(emailData);

        return await successResponse(res, {
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
