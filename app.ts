import express, { Express, Request, Response } from "express";
const app: Express = express();

import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import { fn } from "./src/controller/index.js";

app.use("/api", fn);
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.listen(PORT, () => {
    console.log(`⚡ Server has started on http://localhost:${PORT} `);
});
