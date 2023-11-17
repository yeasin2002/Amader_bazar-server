import { randomBytes } from "crypto";

type CharLength = 6 | 16 | 32 | 64 | 128 | 256 | 512 | 1024;
export const generateOTP = (charLength: CharLength = 16) => {
    return randomBytes(charLength).toString("hex");
};
