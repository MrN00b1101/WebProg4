var db = require('../modules/connect');
var Schema = db.Schema;
var UserSchema = new Schema({
    id: {type: Number, require: true},
    name: { type: String, require: true },
    pass: {type: String, require: true}
    
}, { collection: 'users' });

module.exports = db.model('User', UserSchema);