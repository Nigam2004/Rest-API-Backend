const nodemailer = require("nodemailer");
const emailService = () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "babubisoyi307@gmail.com",
      pass: "amkmnjonelrcswee",
    },
  });

  var mailOption = {
    from: "babubisoyi307@gmail.com",
    to: "nigambisoyiwork4@gmail.com",
    subject: "Node mail",
    text: "mail from node server",
  };

  transporter.sendMail(mailOption, function (error, info) {
    error ? console.log(error) : console.log("succsss");
    console.log(info);
  });
};

module.exports = emailService;
