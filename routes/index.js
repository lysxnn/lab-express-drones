const express = require("express");
const router = express.Router();

/* GET home page */
router.use(require("./drones"));
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
