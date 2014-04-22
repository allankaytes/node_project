
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.multipart());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
/*
  All this gets deleted
*/


/*
  End Delete
*/


app.set('imageStorage', __dirname + "/public/images/");

app.get('/', routes.index);
app.get('/bar', routes.randomName);
app.get('/users', user.list);
app.post('/action', routes.fileupload)
app.get('/pictures', routes.listing_pictures)
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
