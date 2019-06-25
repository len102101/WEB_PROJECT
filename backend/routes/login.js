const express = require('express');
const router = express.Router();
const User = require('../DBmodels/singup');
const crypto = require('crypto'); //Node.js 에서 제공하는 암호화 모듈

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LoginDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongo db connection OK.");
});

router.get('/', function (req, res, next) {
});

// Sign Up
// Post로만 받는다
router.post('/singUp', function (req, res, next) {
  const user = new User();
  // setting values
  user.id = req.body.user.id;
  user.password = req.body.user.password;
  user.name = req.body.user.name;

  let  cipher = crypto.createCipher('aes192', 'key');
  cipher.update(user.password, 'utf8', 'base64');
  let cipheredOutput = cipher.final('base64');
  user.password = cipheredOutput;

  user.save(function(err){
    if(err){
      console.error(err);
      res.json({result: 0});
      return;
    }
    res.json({result: 1});
  });     
});


router.post('/checkLogin', function(req, res, next) {
    //DB에 암호화 하여 저장하였으니 DB에서 확인할때도 암호화 된 키로 확인한다
    let  cipher = crypto.createCipher('aes192', 'key');
    cipher.update(req.body.user.password,'utf8', 'base64');
    let cipherPw = cipher.final('base64');
  
    // find user in MongoDB
    User.findOne({id: req.body.user.id, password: cipherPw}, function(err, user){
      // 구문 error
      if(err) return res.status(500).json({error: err});
      // User가 없으면 error
      if(!user) return res.status(404).json({error: 'user not found'});
      res.json(user);
    })
  });

module.exports = router;