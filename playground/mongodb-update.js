//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to the server');
  }
  console.log('Connected to the server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58ba62c43002d21f48363df2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58ba635edd1dec1ed013b444')
  }, {
    $set: {
      name: "Nadeem"
    },
    $inc : {
      age: 1
    }
  }, {
    returnOriginal :false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
