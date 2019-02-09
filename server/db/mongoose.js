var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
