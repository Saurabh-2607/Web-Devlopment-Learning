const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require('./db');
const JWT_SECRET = "secret";

mongoose.connect('mongodb+srv://admin:admin123@leartest.fw7j2qb.mongodb.net/to_do_DB');

const app = express();
app.use(express.json());

app.post('/signup', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: 'User created successfully'
    })

});

app.post('/signin', async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if (user) {
        console.log({ id: user._id.toString() });
        const token = jwt.sign(
            { id: user._id.toString() },
            JWT_SECRET
        );
        res.json({
            token: token,
            message: 'User logged in successfully'
        })
    }
    else {
        res.status(403).json({
            message: 'Invalid email or password'
        })
    }

});

app.post('/todo', auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;

    await TodoModel.create({
        title: title,
        description: description,
        user: userId
    })

    res.json({
        message: 'Todo created successfully',
        user: userId,
    })

});

app.get('/todos', auth, async function (req, res) {
    const userId = req.userId;
    const todos = await TodoModel.find({
        user: userId
    })

    res.json({
        todos: todos,
    })
});

function auth(req, res, next) {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            message: 'Invalid Credentials'
        })
    }
}

app.listen(3000);