var express = require('express');
var router = express.Router();
var register = require('../middleware/register');
var checkLogin = require('../middleware/login').checkLogin;
var loggedInUsername = null;
var modelUser = require('../schemas/user').user;
var modelTransaction = require('../schemas/transactions').transaction;
router.get('/',
	function (req, res) {	
		
	}
);


router.get('/login',
	function (req, res) {
		if(req.session.user){
			res.status(200).send()
		}else{
			
			res.status(201).send();	

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
					res.header('Access-Control-Allow-Origin', "*");
					res.status(200).json({username: req.body.username, pass:req.body.pass});
				}else{
					
					res.status(404).send();
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
						res.status(500).send()
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
		if(!req.session){
			res.status(201).send();
		}else{
			var transaction = { value: req.body.value,username: req.body.username, description: req.body.description };
			console.log(req.body.username);
			var data = new modelTransaction(transaction);
			data.save();
			res.status(200).send();
		}
	}
);

router.post("/register", function (req, res) {	
	console.log(req.body.username);

	register.register(req.body.username, req.body.pass);
	res.redirect('/');
});
router.get('/logout',
	function (req, res) {
		if(req.session.user){
			req.session.user = null;
		}
		res.status(200).send();
	}
);
module.exports = router;