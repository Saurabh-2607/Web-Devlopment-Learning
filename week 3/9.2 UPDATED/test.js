const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://saurabhsharma:saurabh%409900@leartest.fw7j2qb.mongodb.net/userappnew');

const User = mongoose.model('users', { name: String, email: String, password: String });

app.post("/signup",async function(req,res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existinguser = await User.findOne({email: username });
  if (existinguser){
    return res.status(400).send("username alredy exist")
  }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    
    
    User.save();
    res.json({
      "msg":"user cretaed successfully"
    })
    
})
