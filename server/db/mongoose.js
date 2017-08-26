var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoUri = process.env.MONGODB_URI;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
