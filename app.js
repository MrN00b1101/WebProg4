var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var weboldalRoutes = require('./routes/siteRoutes');

app.use(bodyParser.json());

app.use(express.static('assets'));

app.set('view engine', 'ejs');

app.use('/', weboldalRoutes);
app.listen(8080);



