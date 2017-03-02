'use strict';
// vaiables
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

// file that are open to public
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public/css', express.static('css'));
app.use('/public/js', express.static('js'));
app.use('/public/lib', express.static('lib'));
app.use('/public/images', express.static('images'));

// request and resend function
app.get('/', function(req,res) {
  app.use('/static', express.static(path.join(__dirname + 'public')));
});

// port on server to listen to
app.listen(process.env.PORT || 5000,function(){
  console.log('listing on port 8080 or whatever!');
});
