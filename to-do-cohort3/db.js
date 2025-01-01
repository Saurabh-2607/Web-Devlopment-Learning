const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String,unique: true},
    password: String,
    name: String,
});

const Todo = new Schema({
    title: String,
    description: String,
    user: ObjectId,
    done: {type: Boolean, default: false}ff
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel : UserModel,
    TodoModel : TodoModel
};