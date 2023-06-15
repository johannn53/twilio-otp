const router = require("express").Router();
const twilioRouter = require("./twilioRouter");

router.use("/api/v1/otp", twilioRouter);

module.exports = router;
