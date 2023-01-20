var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    return res.json({ result: false, error: "Missing or empty fields" });
  }

  User.findOne({ email: req.body.email }).then((data) => {
    if (!data) {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save().then((newDoc) => res.json({ result: true, user: newDoc }));
    } else if (data.email === req.body.email) {
      res.json({ result: false, error: "User already exists" });
    }
  });
});

router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    return res.json({ result: false, error: "Missing or empty fields" });
  }

  User.findOne({ email: req.body.email }).then((data) => {
    console.log(data);
    if (
      !data ||
      data.email !== req.body.email ||
      data.password !== req.body.password
    ) {
      res.json({ result: false, error: "User not found" });
    } else {
      res.json({ result: true });
    }
  });
});

module.exports = router;
