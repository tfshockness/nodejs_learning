var express = require('express');
var config = require('./src/lib/config');
var home = require('./src/controller/homeController');
//IF express is going to point to a public folder to host a page, the function express.static 
//have to be set as a middleware for express.
//To add a middleware use use()

//app.use(express.static(__dirname + '/public')); //This will start express server looking for a /public to host

var app = express();
app.get('/api/home', home.get);
app.get('/api/404', home.error);
app.listen(config.port, () => console.log(`Server running on port ${config.port}.`));


module.exports.app = app;