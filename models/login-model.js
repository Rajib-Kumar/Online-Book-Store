var db = require('./db');
var validateUser = function(user, callback){
	var sql = "SELECT * FROM userinfo WHERE username=? AND password=?";
	var param = [
		user.username,
		user.password
	];

	db.getData(sql, param, function (results) {
		if(results == null || results.length == 0)
		{
			callback(false);
		}
		else
		{
			callback(true);
		}
	});
}
module.exports.validateUser = validateUser;