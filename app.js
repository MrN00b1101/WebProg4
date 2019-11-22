var db = require('mongoose');

var uri = "mongodb+srv://user2:qwertz@malacpersely-z58bs.gcp.mongodb.net/webprog?retryWrites=true&w=majority";
//var uri = "mongodb+srv://admin:iqboPLiuPOG9uiZd@cluster0-pdmxq.mongodb.net/webprog?retryWrites=true&w=majority";

db.connect(uri, function (err) {
	//console.log('mongodb connected');
	console.log(err);
});
var Schema = db.Schema;
var UserSchema = new Schema({
	name: { type: String, require: true }
	
}, { collection: 'users' });

var Users = db.model('users', UserSchema);
Users.insertMany({name: 'Roger2'}, (err, result) => {

})
//module.exports = db;