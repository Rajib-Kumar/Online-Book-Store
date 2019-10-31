var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM topbooks ORDER BY top_selling_books DESC";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO userinfo VALUES (null, ?, ?)";
		var param = [user.username, user.password];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	}
};