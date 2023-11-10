import * as dotenv from "dotenv";
dotenv.config();

export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || ``;
export const jwtSecretKey = process.env.JWT_SECRET_KEY || ``;
export const smtpUsername = process.env.SMTP_USERNAME || ``;
export const smtpPassword = process.env.SMTP_PASSWORD || ``;
export const ClientUrl = process.env.CLIENT_URL || ``;

export const pgConnection = process.env.POSTGRES_CONNECTION_STRING || ``;
export const pgPassword = process.env.PG_PASSWORD || ``;
export const pgPort = process.env.PG_PORT || 5432;
