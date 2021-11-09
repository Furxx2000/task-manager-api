const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "furxx2000@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "furxx2000@gmail.com",
    subject: "Good luck",
    text: `Thank you ${name}, Before you leave we want to know why you canceled our services, please take 1 min to let us improve out services.`,
    html: '<div style="border-radius: 50%; background-color: lightblue; color: blue; width: 100px; height: 100px; text-align: center; line-height: 100px">Thank you</div>',
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
