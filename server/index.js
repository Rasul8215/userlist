const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const mongodb = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongodb
  .connect("mongodb://127.0.0.1:27017/userlist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));

const user = require("./models/model");

app.post("/signup", (req, res) => {
  const newuser = new user({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  newuser.save();
  res.json(newuser);
});
app.post("/login", async (req, res) => {
  const newuser = req.body;
  console.log(newuser);
  const data = await user.findOne({ username: newuser.username });
  console.log(data);
  const match = bcrypt.compareSync(newuser.password, data.password);
  console.log(data);
  if (match) {
    const token = jwt.sign(data.toJSON(), "hello");
    return res.json(token);
  } else {
    res.status(400).send("error");
  }
});
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth.replace("Bearer", "").trim();
  jwt.verify(token, "hello", (err, user) => {
    if (err) {
      res.status(401);
    }
    req.data = { ...data, username: data._id };
    next();
  });
});

app.listen(3000);
