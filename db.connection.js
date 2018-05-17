const mysql = require('mysql');

var connection = mysql.createConnection({         //one connection object used (singleton design pattern)
  host: "us-cdbr-iron-east-04.cleardb.ne",
  user: "bba3c2b2dcb9ea",
  password: "8165084149b2935",
  database: "heroku_8d21b3f31316206"
});

connection.connect((err) => {
  if(err){
    return console.log(err.message);
  }
  console.log("Connected to mysql server");
});

module.exports = {connection};
