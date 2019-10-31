// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/contact-us-model');

router.get('/', function(req, res){
		res.render('contact_us/index', {errs: []});
		
});
router.post('/', function(req, res){
	var user = {
        firstname: req.body.FirstName,
        lastname: req.body.LastName,
        email: req.body.Email,
		comment: req.body.Comment,
	};
	var validator = new asyncValidator(userRules.create);
	userModel.insert(user, function(result){
				res.redirect('/home');
			});

});

module.exports = router;