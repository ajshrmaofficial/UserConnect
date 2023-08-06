const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const bodyParser = express.json();
app.use(bodyParser);

app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

app.post("/api/sendMail", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  if (
    !userData ||
    !userData.username ||
    !userData.mobile ||
    !userData.email ||
    !userData.message
  ){
    res.send("Please fill all the fields");
    return
  }
  const message =
    "From: " +
    userData.username +
    "\n" +
    "Mobile: " +
    userData.mobile +
    "\n" +
    "Email: " +
    userData.email +
    "\n" +
    "Message: " +
    userData.message;

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "User Feedback from " + userData.username,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.send("Mail sent successfully");
  } catch (error) {
    res.send("Error sending mail");
  }
});

app.listen(process.env.PORT, () => {
  console.log(
    `App reverse proxy listening at http://localhost:${process.env.PORT}`
  );
});
