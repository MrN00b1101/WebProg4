var modelUser = require('../schemas/user');
function chkLogin (username, pass) {

    modelUser.findOne(
        {
            username: username,
            password: pass
        },
        function(err, user){
            if(!user){
                console.log('Nem jó!');
                return null;
            } else {
             //   console.log(user.skills);
                //console.log(user.username);
                return user.username;
            }
        }
    );
    
    
}
module.exports.chekcLogin = chkLogin;