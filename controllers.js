var getToDos = require('./database.js').getTodos;
var storeToDo = require('./database.js').storeToDo;

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
    console.log(req.body);
    storeToDo(req.body.todo, (err, data) => {
        if(err){
            res.status(404).send(err);
            return;
        }
        res.status(201).send(data);
    })
}

exports.getAll = getAll; 
exports.storeOne = storeOne;