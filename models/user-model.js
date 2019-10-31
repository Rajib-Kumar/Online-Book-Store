var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM userinfo";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO userinfo VALUES (null,?, ?, ?, ?, ?, ?)";
		var param = [user.username,user.firstname,user.lastname,user.password,user.contactno,user.email];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	}
};