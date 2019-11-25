var db = require('../modules/connect');
var Schema = db.Schema;
var transactionSchema = new Schema({
	value: { type: Number, require: true },
    username: {type: String, require: true},
    description: {type: String, require: true}
}, { collection: 'transactions' });

module.exports.transaction = db.model('transaction', transactionSchema);