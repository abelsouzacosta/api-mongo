const router = require("express").Router();
const controller = require("../controllers/AuthController");
const userController = require("../controllers/UserController");

const isAuthenticated = require("../../../shared/http/middlewares/isAuthenticated");

router.post("/register", controller.register);

router.post("/authenticate", controller.authenticate);

router.get("/", isAuthenticated, userController.index);

router.put("/update", isAuthenticated, userController.update);

module.exports = router;
