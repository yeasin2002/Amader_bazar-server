import * as dotenv from "dotenv";
dotenv.config();

export const mongoUrl = process.env.MONGO_CONNECTION_STRING || ``;
export const jwtSecretKey = process.env.JWT_SECRET_KEY || ``;
export const smtpUsername = process.env.SMTP_USERNAME || ``;
export const smtpPassword = process.env.SMTP_PASSWORD || ``;
export const ClientUrl = process.env.CLIENT_URL || ``;
export const Port = process.env.PORT || 1012;

export const defaultUseImage = process.env.DEFAULT_USER_IMAGES || ``;
export const defaultProductImage = process.env.DEFAULT_USER_IMAGES || ``;
export const defaultCategoryImage = process.env.DEFAULT_USER_IMAGES || ``;
