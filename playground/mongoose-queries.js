const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '59a00e950c869522f0cb0cd7';

// Validating the id
// if (! ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }

// // Find all the matched documents
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos ", todos);
// });

// // Finding the first match if there is any
// Todo.findOne({
//     completed: false
// }).then((todo) => {
//     console.log("Todo ", todo);
// });

// Find by ID
// Todo.findById(id).then((todo) => {
//     if (! todo){
//         return console.log('Id not found');
//     }
//     console.log("Todo by ID ", todo);
// }).catch((e) => console.log(e));

var userId = '599fe88a10388812e899f309';

if(ObjectID.isValid(userId)){
    User.findById(userId).then((user) => {
        if (! user){
            return console.log('User not found');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }).catch((e) => console.log(e));
}else{
    console.log('Id provided is invalid');
}
