import { PORT } from "../app.config";

export const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Amader Bazar",
            version: "1.0.0",
            description:
                "The project is an online store that sells a variety of products and allows customers to browse, purchase, and track their orders. This repository contains only the code for the dashboard, which provides an interface for store administrators to manage products, view sales data, and track orders.",
            contact: {
                name: "Md Kawsar Islam Yeasin",
            },
            servers: [`http://localhost:${PORT}`],
        },
    },
    apis: ["../../dist/src/router/*.js"],
};
