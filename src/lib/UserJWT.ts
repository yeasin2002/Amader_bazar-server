import jsonwebtoken from "jsonwebtoken";
import { jwtSecretKey } from "../utils";

export const userJWT = () => {
    return jsonwebtoken.sign({ foo: "bar" }, jwtSecretKey, {
        expiresIn: "30d",
    });
};
