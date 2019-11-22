var express = require('express');
var router = express.Router();

//var ezegyfuggveny = require('../middlewares/ezasajatmodulom');
//var ezegymasikmodul = require('../middlewares/ezegymasikmodul');

var modelUser = require('../schemas/user');
var checkLogin = require('../middleware/login');


var objectRepository = {
	modelUser: modelUser
};

router.get('/',
function (req, res) {
	
	modelUser.findOne(
		{
			
			username: req.username,
			pass: req.pass
		},'username',
		function(err, user){
			if(!user){
				console.log('Nem jó!');
				
				res.json(
					{"haha": req.username}
				);
			} else {
				//console.log(user.skills);
				console.log(user.username);
				res.json(
					{"Bejelentkezve:": user.username}
				);
			}
		}
	);

	
}
	
);


router.get('/register',
	function (req, res) {
		/*res.json(
			{"haha": req.params.ezegyvaltozo}
		);*/
	}
);

router.post('/login',
	//ezegyfuggveny(objectRepository),
	//ezegymasikmodul(objectRepository),
	function (req, res) {
		res.render('index', objectRepository);
		
	}
);
router.get('/transactions',
	function (req, res) {
		/*res.json(
			{"haha": req.params.ezegyvaltozo}
		);*/
	}
);
module.exports = router;