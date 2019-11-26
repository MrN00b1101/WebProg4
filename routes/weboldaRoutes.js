var express = require('express');
var router = express.Router();
var register = require('../middleware/register');
var checkLogin = require('../middleware/login').checkLogin;
var loggedInUsername = null;
var modelUser = require('../schemas/user').user;
var modelTransaction = require('../schemas/transactions').transaction;
router.get('/',
	function (req, res) {	
		res.sendfile('./public/index.html',{title: "Malacpersely", loggedIn: loggedInUsername});
	}
);


router.get('/login',
	function (req, res) {
		if(req.session.user){
			res.status(200).send("Bejelentkezve: "+req.session.user.username);
		}else{
			res.status(201).send("Jelentkezz be!");;	
		}
	}
);
router.post('/login', async function (req, res) {
	
		modelUser.findOne(
			{
				username: req.body.username,
				pass: req.body.pass
			}, function (err, user){
				req.session.user = user;
				if(req.session.user){
					res.status(200).send("Bejelentkezve: " + req.session.user.username);
				}else{
					res.status(404).send("Hibás felhasználó név vagy jelszó!");
				}
			});
		
	}
);
router.get('/transactions',
	function (req, res) {
		if(!req.session.user){
			res.status(201).send("Jelenkezz be!");
		}else{
		
			modelTransaction.find({username:req.session.user.username},
				function(err,transactions){
					if(err){
						res.status(500).send("Valami hiba van")
					}else{
						res.status(200).send(transactions);
					}
				}
				);
		}
	}
);
router.post('/transactions',
	function (req, res) {
		if(!req.session.user){
			res.status(201).send("Jelenkezz be!");
		}else{
			var transaction = { value: req.body.value,username: req.body.name, description: req.body.desc };
			console.log(req.body.name);
			var data = new modelTransaction(transaction);
			data.save();
			res.send("Hozzá adva: "+transaction.description);
		}
	}
);

router.post("/register", function (req, res) {	
	register.register(req.body.name, req.body.pass);
	res.redirect('/');
});
router.get('/logout',
	function (req, res) {
		if(req.session.user){
			req.session.user = null;
		}
		res.status(200).send("Kijelentkezve");
	}
);
module.exports = router;