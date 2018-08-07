var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dbConfig = require('./database/config');
var MongoStore = require('connect-mongo')(session);
var app = express();
var index = require('./controller/index');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'demoupload')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use(session({
    secret: 'yao',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false},
    store: new MongoStore({
        url: 'mongodb://localhost/youdao',
        ttl: 14 * 24 * 60 * 60 })// = 14登录信息有效期是14天
}));
app.use('/',index);

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





