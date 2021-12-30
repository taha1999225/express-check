const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
app.use("/user", require("./routes/user"));
app.get("/", (req, res) => {
  res.send("marhbaa bik");
});

app.post("add new user", (req, res) => {
  try {
    res.send({ tutu: req.body, msg: "jawk bahii" });
  } catch (error) {}
});
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port=${port}`);
});
