var getToDos = require('./database.js').getTodos;
var storeToDo = require('./database.js').storeToDo;
var deleteTask = require('./database.js').deleteTask;
var editTask = require('./database.js').editTask;

var getAll = (req, res) => {
   getToDos((err, data) => {
       if(err){
           res.send(404).send(err);
           return;
       }
       res.status(200).send(data);
   });
}

var storeOne = (req, res) => {
    storeToDo(req.body.todo, (err, data) => {
        if(err){
            res.status(404).send(err);
            return;
        }
        res.status(201).send(data);
    })
}

var deleteOne = (req, res) => {
    deleteTask(req.body.todo, (err, data) => {
        if(err){
            res.status(404).send(err);
            return;
        }
        res.status(201).send(data);
    })
}

var editOne = (req, res) => {
    editTask(req.body.data.todo, req.body.data.newTodo, (err, data) => {
        if(err){
            res.status(404).send(err);
            return;
        }
        res.status(201).send(data);
    }) 
}

exports.getAll = getAll; 
exports.storeOne = storeOne;
exports.deleteOne = deleteOne;
exports.editOne = editOne;