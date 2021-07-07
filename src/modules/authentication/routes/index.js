const router = require("express").Router();
const controller = require("../controllers/AuthController");
const userController = require("../controllers/UserController");

router.post("/register", controller.register);

router.post("/authenticate", controller.authenticate);

router.get("/", userController.index);

module.exports = router;
