const express = require("express");
require("dotenv").config();

const notFound = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();

app.use(errorMiddleware);
app.use(notFound);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(port, " is running");
});
