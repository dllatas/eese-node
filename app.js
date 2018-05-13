var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
/*Redis code*/
/* Redis */
var redis = require('redis'),
  client = redis.createClient();

/* Routing */
var routes = require('./routes/index');
var api = require('./routes/api');
var users = require('./routes/users');

var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
//app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api', api);

// Load initial data into Redis
var options = { method: 'GET',
    url: 'http://localhost:3000/api/context' };

request(options, function (error, response, body) {
    /* Redis code */
    /* The following line should be executed only once at the beginning of the server*/
    if (error) throw new Error(error);
    body = JSON.parse(body);
    client.set(body.table, JSON.stringify(body.data));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;