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


app.use('/', weboldalRoutes);
app.listen(8080);



