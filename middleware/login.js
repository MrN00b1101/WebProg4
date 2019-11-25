var modelUser = require('../schemas/user').user;
async function chkLogin (name, passW,user) {
    modelUser.findOne(
        {
            username: name,
            pass: passW
        }
    )
    console.log(user);
}
module.exports.checkLogin = chkLogin;