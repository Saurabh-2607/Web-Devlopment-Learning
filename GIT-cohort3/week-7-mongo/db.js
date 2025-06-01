const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String,
  email: {type: String, unique: true},
  password: String
});

const Todo = new Schema({
  userId: { type: ObjectId, ref: 'users' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  done: Boolean
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
  UserModel,
  TodoModel
};