const router = require("express").Router();
const controller = require("../controllers/CarController");

router.post("/", controller.create);

module.exports = router;
