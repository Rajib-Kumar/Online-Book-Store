// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/bookList');


router.get('/', function(req, res){
	userModel.getAll(function(result){
		res.render('bookList/index', {userList: result});
		//res.json(result);
	});
});
router.post('/', function(req, res){
	var user = {
        b_id: req.body.b_id,
        no_books: req.body.no_books

	};
	
	userModel.addi(user, function(result){
        res.redirect('/bookList');
    });
});

module.exports = router;