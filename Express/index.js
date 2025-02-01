const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const users = [];

function genrateToken(){
    return
    jwt.sign(a,"Saurabh");             
};

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.username;

    users.push({
        username: username,
        password: password
    });
    res.send("User Created Successfully" + " and your JWT is " + genrateToken({username: username}));

});

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.username;

    const user = users.find(user => user.username === username);
    if(user && user.password === password){
        res.send("Login Successfull");
    }
    else{
        res.send("Invalid Credentials");
    }

});

app.get("/users",function(req,res){
    res.send(users);
});

app.listen(3000);