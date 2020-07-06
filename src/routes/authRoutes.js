const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("You made a post request");
  console.log(req.body);
});

router.get("/", (req, res) => {
  res.send("hahahahah");
});
module.exports = router;
