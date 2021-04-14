const router = require("express").Router();
const User = require("../models/User.js");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({});
});

module.exports = router;
