// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	userModel.getAll(function(result){
		res.render('home/index');
		//res.json(result);
	});
});



module.exports = router;