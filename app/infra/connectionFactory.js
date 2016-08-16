var mysql = require('mysql');

var connectMYSQL = function () {
	if (!process.env.NODE_ENV) {
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password: 'pass',
			database: 'casadocodigo'
		});
	} 

	if (process.env.NODE_ENV == 'test') {
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password: 'pass',
			database: 'casadocodigo_test'
		});
	}
	
}

module.exports = function () {
	return connectMYSQL;
}
