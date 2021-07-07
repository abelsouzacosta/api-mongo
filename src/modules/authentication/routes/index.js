const router = require("express").Router();
const controller = require("../controllers/AuthController");

router.post("/register", controller.register);

router.post("/authenticate", controller.authenticate);

module.exports = router;
