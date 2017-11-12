var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoList');
var Schema = mongoose.Schema;

var todoListSchema = new Schema({
  author: String,
  body: String,
  date: { type: Date, default: Date.now }
});

var todoList = mongoose.model('TODOList', todoListSchema);

module.exports.model = todoList;
