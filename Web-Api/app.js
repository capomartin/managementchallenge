require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var operationsRouter = require('./routes/operations');
var categoriesRouter = require('./routes/categories');
var cors = require('cors');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set("secretKey",process.env.SECRETKEY)
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/operations', operationsRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



const validateUser=(req,res,next)=>{
  jwt.verify(req.headers['x-access-token'],req.app.get("secretKey"),function(err,decoded){
    if(err){
      res.json({message:err.message})
    }else{
      console.log(decoded)
      next()
    }
  })
}

app.validateUser=validateUser


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({"error":true,"message":err.message})
});

module.exports = app;
