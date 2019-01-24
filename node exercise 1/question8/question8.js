var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srimithushan03@gmail.com',
    pass: '*********'
  }
});

var mailOptions = {
  from: 'srimithushan03@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  html : '<h1>Welcome uki </h1> <p> This is easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
