//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');

  // db.collection('Todos').deleteMany({
  //   text: 'Eat Lunch'
  // }).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat Lunch'
  // }).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({
  //   name: "Nadeem"
  // }).then( (result) => {
  //   console.log(result);
  // });
  //

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58ba67bb4a0a0f0c9cc57e53')
  }).then( (result) => {
    console.log(result);
  });


  db.close();
});
