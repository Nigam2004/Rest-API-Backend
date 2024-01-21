const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "casandra76@ethereal.email",
    pass: "6ZtC6RTPaCC5eT6bPU",
  },
});

var mailOption = {
  from: "casandra76@ethereal.email",
  to: "nigambisoyiwork4@gmail.com",
  subject: "Node mail",
  text: "mail from node server",
};

transporter.sendMail(mailOption, function (error, info) {
  error ? console.log(error) : console.log("succsss");
  console.log(info);
});
