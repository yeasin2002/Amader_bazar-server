const { format, createLogger, transports } = require("winston");

const createPrettyLogger = createLogger({
    level: "info",
    format: format.combine(format.json().format.colorize(), format.simple()),
    defaultMeta: { service: "user-service" },
    transports: [new transports.Console()],
});

module.exports = createPrettyLogger;
