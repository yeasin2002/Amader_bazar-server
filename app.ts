import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.listen(PORT, () => {
    console.log(`⚡Server has started on http://localhost:${PORT} `);
});
