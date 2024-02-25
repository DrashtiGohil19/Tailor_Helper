var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var path = require('path');
const dotenv = require('dotenv');
dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var workerRouter = require('./routes/worker');
var customerRouter = require('./routes/customer');
var measurementRouter = require('./routes/measurement');
var billRouter = require('./routes/bill');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/worker', workerRouter);
app.use('/customer', customerRouter);
app.use('/measurement', measurementRouter);
app.use('/bill', billRouter);

// --------- Deployement ------------

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"))
  })
} else {
  app.get('/', (req, res) => {
    res.send("API running succesfully !")
  })
}

// --------- Deployement ------------

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
