var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {User} = require('./models/user')
var {Todo} = require('./models/todo')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save().then((doc )=> {
    res.status(200).send(JSON.stringify(doc, undefined, 2));
  }, (e) => {
    res.status(400).send(e);
  });

});

app.listen(3000, ()=>{
  console.log("App started at port 3000");
})

module.exports = {app};
// var Todo = mongoose.model('Todo',{
//   text: {
//     type: String,
//     required: true,
//     minLength : 1,
//     trim: true
//   },
//   completed:{
//     type: Boolean,
//     default: false
//   },
//   completedAt :{
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: "Cook Dinner"
// });
//
// newTodo.save().then((doc)=>{
//   console.log("Todo Saved : "+doc);
// },(error)=>{
//   console.log("Error Saving the todo"+error);
// });

// var nextTodo = new Todo({
//   text: "    Have Breakfast Now   ",
// });
//
// nextTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log("Error saving Todo : "+error);
// })

// var User = mongoose.model('User', {
//   email: {
//       type: String,
//       required: true,
//       minLength : 1,
//       trim: true
//   }
// });

// var newUser = new User({
//   email: "  mohd.nadeem3464@gmail.com  "
// })
//
// newUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error)=>{
//   console.log("Error Occured Saving User "+error);
// });
