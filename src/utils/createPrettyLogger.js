const { format, createLogger, transports } = require("winston");

const createPrettyLogger = createLogger({
    level: "info",
    // format: format.combine(format.json().format.colorize(), format.simple()),
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm" }),
        format.json(),
    ),
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        }),
        new transports.File({ filename: "./src/log/info.log", level: "info" }),
    ],
});

module.exports = createPrettyLogger;