var db = require('./db');
module.exports = {
	insert: function(user, callback){
		var sql = "INSERT INTO queries VALUES (null, ?, ?, ?, ?)";
		var param = [user.firstname, user.lastname, user.email, user.comment];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	}
};