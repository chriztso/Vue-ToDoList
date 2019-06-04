var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root',
    password : 'yourpassword', 
    database : 'vue'
})

connection.connect(() => {console.log('CONNECTED TO db')});

