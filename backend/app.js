//모듈 require
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

// 페이지  require
const indexRouter = require('./routes/index');
const singup = require('./routes/singup');
const form = require('./routes/form');

let app = express();
app.use(require('connect-history-api-fallback')());

app.use(cookieParser());
app.use(session({
  ket: 'sid',
  secret: '@#@$SRASDN#@REDF$#$',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
  }
 }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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