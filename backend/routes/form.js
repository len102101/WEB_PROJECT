const express = require('express');
const router = express.Router();

var Board = require('../models/board');
var Comment = require('../models/comment');

//몽고 DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = 'mongodb://127.0.0.1:27017/testDB'
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected successfully');
});

router.get('/', function (req, res, next) {
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  const promise = mongoose.connect(mongoDB);
    Board.find({},function (err, board) {
        if(err){
            console.log(err);
        }else{
            res.json({data:board});
        }
        mongoose.connection.close()
    });
  });
   
  /* board insert mongo */
router.post('/board/write', function (req, res) {
    var board = new Board();
    const promise = mongoose.connect(mongoDB);
    board.title = req.body.input.title;
    board.contents = req.body.input.contents;
   
    board.save(function (err) {
      if(err){
        console.log(err);
        res.json({result: 0});
        mongoose.connection.close()
        return; 
      }
      mongoose.connection.close()
      res.json({result: 1});
    });
});
   
  /* board find by id */
router.get('/board/:id', function (req, res) {
  const promise = mongoose.connect(mongoDB);
      Board.findOne({_id: req.params.id}, function (err, board) {
          res.render('board', { title: 'Board', board: board });
      })
      mongoose.connection.close()
});
   
  /* comment insert mongo*/
router.post('/comment/write', function (req, res){
  const promise = mongoose.connect(mongoDB);
      var comment = new Comment();
      comment.contents = req.body.contents;
      comment.author = req.body.author;
   
      Board.findOneAndUpdate({_id : req.body.id}, { $push: { comments : comment}}, function (err, board) {
          if(err){
              console.log(err);
              res.redirect('/');
          }
          res.redirect('/board/'+req.body.id);
      });
      mongoose.connection.close()
});
   
  module.exports = router;