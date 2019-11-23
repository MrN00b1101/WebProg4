var express = require('express');
var router = express.Router();

//var ezegyfuggveny = require('../middlewares/ezasajatmodulom');
//var ezegymasikmodul = require('../middlewares/ezegymasikmodul');

var modelUser = require('../schemas/user');
//var checkLogin = require('../middleware/login');


var objectRepository = {
	modelUser: modelUser
};

router.get('/',
	function (req, res) {	
		res.render('index', objectRepository);
	}
);


router.get('/register',
	function (req, res) {
		res.render('register', objectRepository);
		
	}
);

router.post('/login',
	//ezegyfuggveny(objectRepository),
	//ezegymasikmodul(objectRepository),
	function (req, res) {
		res.render('login', objectRepository);
		
	}
);
router.get('/transactions',
	function (req, res) {
		res.render('tranList', objectRepository);
		
	}
);
module.exports = router;