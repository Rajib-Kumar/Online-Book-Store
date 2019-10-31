var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM booklist";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
    addi: function(user, callback){
		var sql = "UPDATE booklist SET available=available+? WHERE b_id=?";
		var param = [user.no_books,user.b_id];
		db.getData(sql, param, function (results) {
            console.log(user.no_books);
            console.log("Books Not Available");
			callback(results);
		});
	}
};
