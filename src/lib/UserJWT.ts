import jsonwebtoken from "jsonwebtoken";
import { jwtSecretKey } from "../utils";
interface UserInfo {
    id: import("mongoose").Types.ObjectId;
    name: string;
    email: string;
    number: string;
}

export const userJWT = ({ id, name, email, number }: UserInfo) => {
    return jsonwebtoken.sign({ id, name, email, number }, jwtSecretKey, {
        expiresIn: "30d",
    });
};
