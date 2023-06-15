const router = require("express").Router();
const twilioController = require("../controllers/twilioController");

router.post("/send", twilioController.sendOtp);
router.post("/verify", twilioController.verifyOtp);

module.exports = router;
