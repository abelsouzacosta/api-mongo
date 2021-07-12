const router = require("express").Router();

const authenticationRouter = require("../../../modules/authentication/routes/");
const carRouter = require("../../../modules/cars/routes/");
const ownerRouter = require("../../../modules/owners/routes/");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

router.use("/authenticate", authenticationRouter);

router.use("/cars", carRouter);

router.use("/owners", ownerRouter);

module.exports = router;
