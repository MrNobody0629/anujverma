var express = require('express');
const path = require('path');
const mail = require("./sendEmail.js");
var router = express.Router();


router.use(express.urlencoded({extended:true}));
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/saveMessage',(req, res, next)=> {
  console.log(req.body)
  const {name,email,subject,message} = req.body;
  console.log(name +"  "+email+" "+subject+" "+message)
  mail.sendMail(name,email,subject,message);
  res.send('respond with a resource');
});

module.exports = router;
