var db = require('mongoose');


var uri = "mongodb+srv://user2:qwertz@malacpersely-z58bs.gcp.mongodb.net/webprog?retryWrites=true&w=majority";
db.connect(uri, function (err) {
	console.log('mongodb connected');
	
	console.log(err);
});

module.exports = db;