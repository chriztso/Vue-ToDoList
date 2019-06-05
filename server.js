var express = require('express');
var app = express(); 
var controllers = require('./controllers.js');
var bodyParser = require('body-parser');

var port = 3000; 

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/todos', controllers.getAll);
app.post('/todos', controllers.storeOne);
app.delete('/todo', controllers.deleteOne)



app.listen(port, () => {console.log('listening on port 3000')});
