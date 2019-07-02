const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
});


router.post('/student', function (req, res, next) {
  var name = req.body.input.name;
  var mail = req.body.input.mail;
  var password = req.body.input.password;
  var Grade = req.body.input.Grade;
  var Class = req.body.input.Class;
  var Number = req.body.input.Number;

  console.log("name: " + name);
  console.log("mail:" + mail);
  console.log("password: " + password);
  console.log("Grade: " + Grade);
  console.log("Class: " + Class);
  console.log("Number: " + Number);
});

router.post('/teacher', function (req, res, next) {
  var name = req.body.input.name;
  var mail = req.body.input.mail;
  var password = req.body.input.password;
  var teacher_code = req.body.input.Teacher_code;

  console.log("name: " + name);
  console.log("mail:" + mail);
  console.log("password: " + password);
  console.log("teacher_code: " + teacher_code);
});
module.exports = router;