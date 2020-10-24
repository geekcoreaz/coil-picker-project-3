const router = require("express").Router();

// GET method route
router.get("/", function (req, res) {
  res.json("Coils");
});

// POST method route
router.post("/", function (req, res) {
  res.send("Coils");
});
//PUT method route
router.put("/", function (req, res) {
  res.send("Coils");
});

module.exports = router;
