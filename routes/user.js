const express = require("express");
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.send("marhbaa bik");
});
userRouter.post("add new user", (req, res) => {
  try {
    res.send({ tutu: req.body, msg: "jawk bahii" });
  } catch (error) {}
});
module.exports = userRouter;
