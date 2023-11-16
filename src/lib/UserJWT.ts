import jsonwebtoken from "jsonwebtoken";
import { jwtSecretKey } from "../utils";

export const userJWT = () => {
    return jsonwebtoken.sign(
        {
            exp: "30d",
            //*  rest of the Details of user
            data: {
                name: "Yeasin",
            },
        },
        jwtSecretKey
    );
};
