// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');



router.get('/', function(req, res){
	userModel.getAll(function(result){
		res.render('admin-userinfo/index', {userList: result});
		//res.json(result);
	});
});

module.exports = router;