// DECLARATION
var express = require('express');
var router = express.Router();

var loginModel = require.main.require('./models/login-model');
var adminModel = require.main.require('./models/admin-login-model');

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	loginModel.validateUser(user, function(valid){
		if(valid)
		{
			req.session.loggedUser = user;
			res.redirect('/home');
		}
		else
		  {
			adminModel.validateUser(user, function(valid){
		      if(valid)
		      {
			     req.session.loggedUser = user;
			     res.redirect('/userinfo');
		      }
		      else
              {
			     res.render('error/login_error');
		      }
	       });
		}
	});
	

});

module.exports = router;