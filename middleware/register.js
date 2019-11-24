var modelUser = require('../schemas/user');


function register(name, passw){
   var user = { username: name, pass: passw };
   // console.log(objectRepository.body);
    //var dbo = db('Malacpersely');
   var data = new modelUser.user(user);
   data.save();
}

module.exports.register = register;