const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  res.json({ msg: "Login" });
});

authRouter.post("/register", (req, res) => {
  res.json({ msg: "Register..." });
});

module.exports = authRouter;
