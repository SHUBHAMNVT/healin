const { otpGen } = require("otp-gen-agent");

class OTP {

  async generateOTP () {
    const otp = await otpGen();
    return otp;
  }

  async saveOTPToDB (userId, Model) {
    const otp = await this.generateOTP();
    await Model.findByIdAndUpdate(userId, {otp : otp});
    return otp;
  }

  async blackListOTPFromDB (userId, Model) {
    await Model.findByIdAndUpdate(userId, {otp : ""});
  }

  async otpOperation (userId, Model) {
    try {
      const otp = await this.saveOTPToDB(userId, Model);
      await setTimeout(async () => {
        await this.blackListOTPFromDB(userId, Model);
      }, 600000);
      return otp;
    } catch (error) {
      console.log(error);
      throw new Error("OTP Not generated");
    }
  } 
}

module.exports = OTP;