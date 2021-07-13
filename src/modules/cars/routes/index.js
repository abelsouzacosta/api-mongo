const router = require("express").Router();
const controller = require("../controllers/CarController");

router.get("/", controller.index);

router.get("/details/:id", controller.details);

router.post("/", controller.create);

router.put("/update/:id", controller.update);

router.delete("/delete/:id", controller.delete_car);

module.exports = router;
