const router = require("express").Router();
const controller = require("../controllers/CarController");

router.get("/", controller.index);

router.post("/", controller.create);

module.exports = router;
