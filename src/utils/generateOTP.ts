import { randomBytes } from "crypto";

export const generateOTP = () => {
    return randomBytes(16).toString("hex");
};
