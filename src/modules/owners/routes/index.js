const router = require("express").Router();
const controller = require("../controllers/OwnerController");

router.get("/", controller.index);

router.post("/", controller.create);

module.exports = router;
