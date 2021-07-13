const router = require("express").Router();
const controller = require("../controllers/CarController");

router.get("/", controller.index);

router.post("/", controller.create);

router.delete("/delete/:id", controller.delete_car);

module.exports = router;
