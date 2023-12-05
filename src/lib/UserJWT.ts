import jsonwebtoken from "jsonwebtoken";
import { createPrettyError, jwtSecretKey } from "../utils";
export interface UserInfo {
    id: import("mongoose").Types.ObjectId;
    name: string;
    email: string;
    number?: string;
}

export const userJWT = ({ id, name, email, number }: UserInfo) => {
    return jsonwebtoken.sign({ id, name, email, number }, jwtSecretKey, {
        expiresIn: "30d",
    });
};

export const getUserJWT = (headerToken: string): UserInfo => {
    const token = headerToken?.trim().split(" ").at(-1);
    if (!token) {
        return createPrettyError(401, "invalid token");
    }
    const decoded = jsonwebtoken.verify(token, jwtSecretKey!);
    if (!decoded) {
        return createPrettyError(401, "invalid token");
    }

    return decoded as UserInfo;
};
