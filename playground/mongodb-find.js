//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log("Todos : ");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch the todos ",err);
  // });

  // db.collection('Users').find({
  //   name: 'Nadeem'
  // }).toArray().then((docs) => {
  //   console.log("Users : ");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch the todos ",err);
  // });

  // db.collection('Users').find({
  //   _id: new ObjectID('58ba6f9ad62903bc8ef7b48f')
  // }).toArray().then((docs) => {
  //   console.log("Users : ");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch the todos ",err);
  // });

  // db.collection('Users').find().count().then((docs) => {
  //   console.log("Users count: ",docs);
  // }, (err) => {
  //   console.log("Unable to fetch the todos ",err);
  // });

  db.collection('Users').find({
    name: 'Nadeem'
  }).toArray().then((docs) => {
    console.log("Users : ");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch the todos ",err);
  });

  db.close();
});
