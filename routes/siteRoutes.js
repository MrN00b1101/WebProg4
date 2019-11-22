var express = require('express');
var router = express.Router();

//var ezegyfuggveny = require('../middlewares/ezasajatmodulom');
//var ezegymasikmodul = require('../middlewares/ezegymasikmodul');

var modelUser = require('../schemas/user');


var objectRepository = {
	modelUser: modelUser
};

router.get('/',
	function (req, res) {

		modelUser.findOne(
			{
				username: 'gyozo',
				password: '1234'
			}, 'username skills',
			function(err, user){
				if(!user){
					console.log('Nem jó!');
				} else {
					console.log(user.skills);
					console.log(user.username);
				}
			}
		);

		res.json(
			{"haha": "hahaha"}
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