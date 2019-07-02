const express = require('express');
const router = express.Router();
const User = require('../models/user');
const crypto = require('crypto');


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = 'mongodb://127.0.0.1:27017/singuptestDB'
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected successfully');
});

router.get('/', function (req, res, next) {
});


router.post('/student', function (req, res, next) {
  const user = new User();
  const promise = mongoose.connect(mongoDB);

  user.name = req.body.input.name;
  user.mail = req.body.input.mail;
  user.password = req.body.input.password;
  user.user_coed = 0;
  user.grade = req.body.input.Grade;
  user.class = req.body.input.Class;
  user.number = req.body.input.Number;

  let  cipher = crypto.createCipher('aes192', 'key');
  cipher.update(user.password, 'utf8', 'base64');
  let cipheredOutput = cipher.final('base64');
  user.password = cipheredOutput;

  user.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      mongoose.connection.close()
      return;
    }
    res.json({result: 1});
    mongoose.connection.close()
  });     
});

router.post('/teacher', function (req, res, next) {
  const user = new User();
  const promise = mongoose.connect(mongoDB);
  
  user.name = req.body.input.name;
  user.mail = req.body.input.mail;
  user.password = req.body.input.password;
  user.user_coed = 1;

  let  cipher = crypto.createCipher('aes192', 'key');
  cipher.update(user.password, 'utf8', 'base64');
  let cipheredOutput = cipher.final('base64');
  user.password = cipheredOutput;

  user.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      mongoose.connection.close()
      return;
    }
    mongoose.connection.close()
    res.json({result: 1});
  });     
});

router.post('/checklogin', function (req, res, next) {
  const promise = mongoose.connect(mongoDB);
  let  cipher = crypto.createCipher('aes192', 'key');
  cipher.update(req.body.input.password,'utf8', 'base64');
  let cipherPw = cipher.final('base64');

  User.findOne({mail: req.body.input.mail, password: cipherPw}, function(err, user){
    // 구문 error
    if(err) return res.status(500).json({error: err});
    // User가 없으면 error
    if(!user) return res.status(404).json({error: 'user not found'});
    res.json(user);
  })
});

router.get('/List', function(req, res, next) {
  const promise = mongoose.connect(mongoDB);
    User.find({},function (err, user) {
        if(err){
            console.log(err);
        }else{
            console.log(user);
            res.json({data:user});
        }
        mongoose.connection.close()
    });
  });

module.exports = router;