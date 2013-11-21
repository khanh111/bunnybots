
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var db = require('./modules/db.js');
var io = require('socket.io').listen(app);;

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//connect to this database
//db.connect('bunnybots2013test');

app.get('/', function(req, res) {
  res.render('index', {title:'Bunnybots'});
});

app.get('/MatchView', function(req, res) {
  res.render('MatchView', {title:'MatchView'});
});

app.get('/Verify', function(req, res) {
  res.render('Verify', {title:'Verify'});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
