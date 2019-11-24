var db = require('../modules/connect');
var Schema = db.Schema;
var UserSchema = new Schema({
    
    username: { type: String, require: true },
    pass: {type: String, require: true}
    
}, { collection: 'users' });

module.exports.user = db.model('User', UserSchema);