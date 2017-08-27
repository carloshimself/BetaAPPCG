var mysql  = require('mysql');

function createDBConnection(){
		return mysql.createConnection('mysql://root:root@localhost:3306/teste');
}
module.exports = function() {
	createDBConnection
	return createDBConnection;
}