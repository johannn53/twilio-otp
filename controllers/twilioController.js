const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_SID } =
  process.env;
const client = require("twilio")(
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_SERVICE_SID
);

module.exports = {
  sendOtp: async (req, res, next) => {
    try {
      const { countryCode, phoneNumber } = req.body;
      const otpResponse = await client.verify.v2
        .services(TWILIO_SERVICE_SID)
        .verifications.create({
          to: `+${countryCode}${phoneNumber}`,
          channel: "sms",
        });

      res.status(200).json({
        status: true,
        message: "Success send OTP",
        data: {
          to: otpResponse.to,
          channel: otpResponse.channel,
          status: otpResponse.status,
        },
      });
    } catch (error) {
      if (error.code === 60203) {
        return res.status(429).json({
          status: false,
          messaege: "Max send attempts reached",
        });
      }
      next(error);
    }
  },
  verifyOtp: async (req, res, next) => {
    try {
      const { countryCode, phoneNumber, otp } = req.body;
      const verifOtp = await client.verify.v2
        .services(TWILIO_SERVICE_SID)
        .verificationChecks.create({
          to: `+${countryCode}${phoneNumber}`,
          code: otp,
        });

      return res.status(200).json({
        status: true,
        message: "Verif success",
        data: {
          status: verifOtp.status,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "An error occurred during OTP verification",
        error: "Invalid otp code",
      });
    }
  },
};
