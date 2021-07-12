const router = require("express").Router();

const authenticationRouter = require("../../../modules/authentication/routes/");
const patientRouter = require("../../../modules/patient/routes/");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world",
  });
});

router.use("/authenticate", authenticationRouter);

router.use("/patient", patientRouter);

module.exports = router;
