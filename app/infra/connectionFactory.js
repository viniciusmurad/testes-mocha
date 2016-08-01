var mysql = require('mysql');

var connectMYSQL = function () {
	
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password: 'sorvete1',
			database: 'casadocodigo'
		});
}

module.exports = function () {
	return connectMYSQL;
}