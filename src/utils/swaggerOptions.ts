import { PORT } from "../../app.config";

export const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Amader Bazar",
            version: "1.0.0",
            description: "API Documentation",
            contact: {
                name: "Md Kawsar Islam Yeasin",
            },
            servers: [`http://localhost:${PORT}`],
        },
    },
    apis: ["./routes/*.js"],
};
