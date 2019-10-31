var db = require('./db');
var validateUser = function(user, callback){
	var sql = "SELECT * FROM admin WHERE admin_id=? AND admin_pass=?";
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