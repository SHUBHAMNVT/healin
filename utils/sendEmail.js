require("dotenv").config();
const sgMail = require('@sendgrid/mail');

const sendEmail = async ({email, text, from, subject, html}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to : email,
    from : from,
    subject : subject,
    text : text,
    html : html
  };

  try {
    const isMailSent = await sgMail.send(msg);
    console.log(isMailSent);
    return isMailSent[0].Response;
  } catch (error) {
    throw new Error("Email not sent");
  }
};

module.exports = sendEmail;