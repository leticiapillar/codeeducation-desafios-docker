
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'db',
	user:'root',
	password:'root',
	database:'dbpeople'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;