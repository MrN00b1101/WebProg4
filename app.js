var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var weboldalRoutes = require('./routes/weboldaRoutes');
app.use(express.static('assets'));
app.use(session({secret:'titkosSzöveg', saveUninitialized: true, resave: true}));



var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use('/', weboldalRoutes);
app.listen(8080);



