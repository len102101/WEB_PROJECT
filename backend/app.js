//모듈 require
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// 페이지  require
var indexRouter = require('./routes/index');
var singup = require('./routes/singup');
var form = require('./routes/form');

var app = express();
app.use(require('connect-history-api-fallback')());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//몽고 DB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoDB = 'mongodb://127.0.0.1:27017/testDB'
const promise = mongoose.connect(mongoDB);
 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected successfully');
});

// 페이지 라우터 설정
app.use('/', indexRouter);
app.use('/singup', singup);
app.use('/form', form);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
