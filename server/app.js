const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const limiter = require("./src/utils/expressRateLimit");

// middlewares
const lastErrorHandler = require("./src/middleware/LastErrorHandler");
const notFound = require("./src/middleware/NotFound");

//  app in use
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Hello World",
  });
});

app.use(notFound);
app.use(lastErrorHandler);
app.listen(2709, () => {
  console.log("Server is listening on port http://localhost:2709/");
});
