var express = require('express');
var router = express.Router();
var register = require('../middleware/register');
var checkLogin = require('../middleware/login');
var loggedInUsername = null;
router.get('/',
	function (req, res) {	
		res.render('index', {title: "Malacpersely", loggedIn: loggedInUsername});
	}
);

router.get('/register', function(req, res) {
	res.render('register');
}
);
router.get('/login',
	function (req, res) {
		res.render('login');	
	}
);
router.post('/login',
	function (req, res) {
		loggedInUsername = checkLogin(req.body.username, req.body.password);
	}
);
router.get('/transactions',
	function (req, res) {
		res.render('tranList');	
	}
);

router.post("/register", function (req, res) {	
	register.register(req.body.name, req.body.pass);
	res.redirect('/');
});
module.exports = router;