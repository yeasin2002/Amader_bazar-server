import { jwtSecretKey } from "exportEnv.js";
import jwt from "jsonwebtoken";

export const generateJWT = ({
    data = {},
    key = jwtSecretKey,
    option = { expiresIn: `30d` },
}) => {
    return jwt.sign(data, key, option);
};
