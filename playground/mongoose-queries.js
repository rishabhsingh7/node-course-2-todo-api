var {ObjectId} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

// var id = '5c5bad11cea055542f08f397';
var id = '5c5bad11cea055542f08f397111';

if (!ObjectId.isValid(id)) {
    return console.log('ID is invalid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: '+ todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: '+ todo);
// });

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id: '+ todo);
}).catch((e) => console.log(e) );
