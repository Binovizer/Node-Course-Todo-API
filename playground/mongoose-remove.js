const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Remove All
// Todo.remove({}).then((res) => {
//     console.log(res);
// }).catch((e) => console.log(e));


var id = '59a13655480de084df417a6a';
// findOneAndRemove
Todo.findOneAndRemove({ _id: id}).then((res) => {
    console.log(res);
}).catch((e) => console.log(e));

// findByIdAndRemove
// Todo.findByIdAndRemove(id).then((res) => {
//     console.log(res);
// }).catch((e) => console.log(e));