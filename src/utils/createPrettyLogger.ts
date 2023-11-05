const { format, createLogger, transports } = require("winston");

export const createPrettyLogger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm" }),
        format.tson()
    ),
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        }),
        new transports.File({ filename: "./src/log/info.log", level: "info" }),
    ],
});

