const router = require("express").Router();
const controller = require("../controllers/OwnerController");

router.post("/", controller.create);

router.get("/", controller.index);

router.get("/details/:id", controller.details);

router.put("/update/:id", controller.update);

router.delete("/delete/:id", controller.delete_owner);

module.exports = router;
