const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  res.status(200).json({ message: `Login API hit!` });
});

module.exports = router;
