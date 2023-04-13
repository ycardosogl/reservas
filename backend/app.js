var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bdyparser = require('body-parser');
var cors = require('cors');

//var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var usersRouter = require('./routes/users');
var clientesRouter = require('./routes/clientes');
var salasRouter = require('./routes/salas');
var funcionariosRouter = require('./routes/funcionarios');
var reservasRouter = require('./routes/reservas')

require('dotenv').config ({path: __dirname + '/.env' })

var app = express();

// CORS
app.use(cors({origin:'http://localhost:3000'}));
app.options('*', cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clientes',clientesRouter);
app.use('/funcionarios',funcionariosRouter);
app.use('/salas',salasRouter);
app.use('/api', apiRouter);
app.use('/reservas',reservasRouter);



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
