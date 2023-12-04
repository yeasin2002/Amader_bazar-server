"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
const utils_1 = require("../utils");
exports.swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Amader Bazar",
            version: "1.0.0",
            description: "The project is an online store that sells a variety of products and allows customers to browse, purchase, and track their orders. This repository contains only the code for the dashboard, which provides an interface for store administrators to manage products, view sales data, and track orders.",
            contact: {
                name: "Md Kawsar Islam Yeasin",
            },
            servers: [`http://localhost:${utils_1.Port}`],
        },
    },
    apis: ["../../dist/src/router/*.js"],
};
//# sourceMappingURL=swaggerOptions.js.map