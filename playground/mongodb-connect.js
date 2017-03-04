//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')
//
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');

  // db.collection('Todos').insertOne({
  //   text: 'Some text goes here',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert record');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: 'Nadeem',
  //   age: 21,
  //   location: 'Delhi, India'
  // }, (err, result) => {
  //   if (err){
  //     console.log('Unable to insert User');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   //console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
