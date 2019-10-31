// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	res.render('register/register', {errs: []});
});

router.post('/', function(req, res){
	var user = {
        username: req.body.UName,
        firstname: req.body.FName,
        lastname: req.body.LName,
		password: req.body.password,
        contactno: req.body.contactno,
        email: req.body.email,
	};

	var validator = new asyncValidator(userRules.create);
	validator.validate(user, function(errors, fields){
		if(errors)
		{
			res.render('register/register', {errs: errors});
		}
		else
		{
			userModel.insert(user, function(result){
				res.redirect('/login');
			});
		}
	});
});

module.exports = router;