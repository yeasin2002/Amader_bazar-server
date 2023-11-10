import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import kleur from "kleur";

import { PORT } from "../app.config";
import { reqLogger } from "./utils";


import { Product, Review, User, category } from "./model";
import { seedRoute } from "./router/seed.route";
import { connectDB } from "./utils/connectDB";

const app = express();
app.use(compression()); 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(reqLogger);
app.use(
    cors({
        credentials: true,
    })
);

app.use("/seed", seedRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//  Database Sync
User.sync({ alter: true });
Product.sync({ alter: true });
Review.sync({ alter: true });
category.sync({ alter: true });


app.listen(PORT, async () => {
    await connectDB();
    console.log(
        "⚡",
        kleur
            .bgGreen()
            .white()
            .bold(`Server running on http://localhost:${PORT}`)
    );
});
