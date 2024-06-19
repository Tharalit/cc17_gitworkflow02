const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  res.json({ msg: "Login" });
});

module.exports = authRouter;
