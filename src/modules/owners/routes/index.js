const router = require("express").Router();
const controller = require("../controllers/OwnerController");

router.post("/", controller.create);

router.get("/", controller.index);

router.get("/details/:id", controller.details);

module.exports = router;
