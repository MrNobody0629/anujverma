var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  // host: 'smtp-mail.outlook.com',                  // hostname
  // service: 'outlook',                             // service name
  // secureConnection: false,
  // tls: {
  //     ciphers: 'SSLv3'                            // tls version
  // },
  // port: 587,
  // auth: {
  //   user: 'portfolio0629@outlook.com',
  //   pass: 'Anujportfolio22@#',
  // }
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
      user: 'portfolioanujverma@gmail.com',
      pass: 'Hacker22@',
  }
});

const sendMail = (name,email,subject,message)=>
{
    var subject = "Thank You For Registering";
    var mailOptions = {
    from: "portfolio0629@outlook.com",
    to: "anujv962@gmail.com",
    subject: subject,
    html: '<h2>Mail Sended BY '+name+'</h2><br><h3>Sender EmailId is '+email+'</h3><br><p>'+message+'</p>',
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}

module.exports = {sendMail};