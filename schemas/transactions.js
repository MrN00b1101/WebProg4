var db = require('../modules/connect');
var Schema = db.Schema;
var UserSchema = new Schema({
	value: { type: Number, require: true },
    userId: {type: Number, require: true},
    description: {type: String, require: true}
}, { collection: 'transaction' });

module.exports = db.model('User', UserSchema);