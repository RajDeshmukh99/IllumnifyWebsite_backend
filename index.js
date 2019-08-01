var express = require("express");
var path = require("path");
var app = express();
const sgMail = require("@sendgrid/mail");
//modules
require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: "test@example.com",
//   from: "test@example.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js"
// };
// sgMail.send(msg);

//Get request routes

app.listen(process.env.PORT || 3001, function() {
  console.log("Listening on port 3001");
});

// app.get("/", (req, res) => {
//   res.json({ Message: "Mail API" });
// });
app.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});

app.post("/postroute", async (req, res, next) => {
  try {
    let str = "";
    str =
      "<b>Name:</b>  " +
      req.body.fname +
      " " +
      req.body.lname +
      " <br /><br /> " +
      "<b>Message:</b><br />  " +
      req.body.mess;
    let msg = {
      to: process.env.TO_MSG,
      from: req.body.email,
      subject: req.body.subject,
      html: str
    };
    await sgMail.send(msg);
    console.log(req.body);
    // return res.json({ message: req.body });
    return res.redirect("back");
  } catch (error) {
    return console.log(error);
  }
});
