var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'king4832',
  database : 'opentutorials'
}
);

db.connect();

module.exports = db;