var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  mail: String,
  password: String,
  user_code: Number,
  user_point: {type:Number, default:500},
  grade: {type:Number, default:0},
  class: {type:Number, default:0},
  number: {type:Number, default:0},
  board_count: {type:Number, default:0},
  create_date: {type:Date, default:Date.now}
});

module.exports = mongoose.model('user', userSchema);
