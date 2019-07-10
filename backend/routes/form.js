const express = require('express');
const router = express.Router();

let Board = require('../models/board');
let Comment = require('../models/comment');

//몽고 DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = 'mongodb://localhost/AlltestDB'

 
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
          console.log(req.session.name)
            res.json({name:req.session.name, data:board});
        }
        mongoose.connection.close()
    });
  });
   
  /* board insert mongo */
router.post('/board/write', function (req, res) {
    let board = new Board();
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
      })
      res.json({result: 1});
    });
   
  /* board find by id */
router.get('/board/load', function (req, res) {
  const promise = mongoose.connect(mongoDB);
  Board.find({_id:req.query.postId},function (err, board) {
    if(err){
        console.log(err);
    }else{
        res.json({name:req.session.name, data:board, postId: req.query.postId});
    }
      mongoose.connection.close()
  });
})

router.post('/comment/write', function(req,res){
  const pomise = mongoose.connect(mongoDB);
  const id = req.body.input.postId;

  let comment = new Comment();
  comment.author = req.session.name;
  comment.contents = req.body.input.comment

  Board.updateOne({_id:id},{$push:{comments:comment}},function(err,board){
    mongoose.connection.close()
    if(err){
      console.log("Err")
    }
    else{
      console.log(board)
      res.json({data:id})
    }
  })
})
   
module.exports = router;