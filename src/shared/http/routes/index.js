const router = require("express").Router();

const authenticationRouter = require("../../../modules/authentication/routes/");
const carRouter = require("../../../modules/car/routes/");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

router.use("/authenticate", authenticationRouter);

router.use("/cars", carRouter);

module.exports = router;
