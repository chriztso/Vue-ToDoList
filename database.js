var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root',
    password : 'yourpassword', 
    database : 'vue'
})

connection.connect(() => {console.log('CONNECTED TO db')});

var getTodos= (callback) => {
    var query = 'SELECT todo FROM todos';
    connection.query(query, (err, data) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, data);
    })
}

var storeToDo = (todo, callback) => {
    var query = `INSERT INTO todos(todo) VALUES ('${todo}')`;
    connection.query(query, (err, data) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, data);
    })
}

var deleteTask = (todo, callback) => {
    var query  = `DELETE from todos WHERE todo = '${todo}'`;
    connection.query(query, (err, data) => {
        if(err){
            callback(err, null);
            return;
        }
        callback(null, data);
    })
}

exports.getTodos = getTodos;
exports.storeToDo = storeToDo;
exports.deleteTask = deleteTask;