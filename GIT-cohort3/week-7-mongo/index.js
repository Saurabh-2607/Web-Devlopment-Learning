const bcrypt = require("bcrypt");
require('dotenv');
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect(DB_URL);

const app = express();
app.use(express.json());

// to craete a new user

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });

        res.json({
            message: "You are signed up"
        });
    } catch (e) {
        res.json({
            message: "Error"
        });
    }
});

// to sign in

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });

    if (!response) {
        res.status(403).json({
            message: "User not found" 
        });
        return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

// to create a new todo

app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;
    const done = req.body.done;

    try {
        const todo = await TodoModel.create({
            userId,
            title,
            description,
            done: done || false
        });

        res.json({
            todoId: todo._id,
            message: "Todo created"
        });
    } catch (e) {
        res.status(500).json({
            message: "Error creating todo"
        });
    }
});

//to update a todo

app.put("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const todoId = req.body.todoId;

    await TodoModel.updateOne({
        userId,
        title
    }, {
        done
    });

    res.json({
        message: "Todo updated"
    })

});

// to delete a todo

app.delete("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const todoId = req.body.todoId;

    await TodoModel.deleteOne({
        userId,
        title
    });

    res.json({
        message: "Todo deleted"
    })

});

// to get all todos

app.get("/todo", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);