const router = require("express").Router();
const controller = require("../controllers/OwnerController");

router.post("/", controller.create);

module.exports = router;
