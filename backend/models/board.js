var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    contents: String,
    author: String,
    comment_date: {type: Date, default: Date.now()}
});
 
var boardSchema = new Schema({
    title: String,
    contents: String,
    board_adoption:{type:Boolean, default:false},
    board_date: {type: Date, default: Date.now()},
    comments: [commentSchema]
});
 
module.exports = mongoose.model('board', boardSchema);