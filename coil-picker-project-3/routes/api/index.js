const router = require("express").Router();
const coilRoutes = require("./coils");
console.log("routerworking");
// Coil routes

router.use("/coils", coilRoutes);

module.exports = router;
