const express = require("express");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();

app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(port, " is running");
});
