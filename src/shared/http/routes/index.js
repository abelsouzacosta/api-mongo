const router = require("express").Router();

const authenticationRouter = require("../../../modules/authentication/routes/");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

router.use("/authenticate", authenticationRouter);

module.exports = router;
