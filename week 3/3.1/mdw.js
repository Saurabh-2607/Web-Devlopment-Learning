const express = require("express");
const port = 3000;
const app = express();


app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;  
    const kidneyId = req.query.kidneyId;

    if (!(username === "saurabh" && password === "pass")) {
        res.status(400).json({"msg": "Something's wrong with your input"});
        return;
    }

    if (username === "saurabh" && password === "pass") {
        if (kidneyId !== "1" && kidneyId !== "2") {
            res.status(400).json({"msg": "Invalid kidneyId"});
            return;
        }
        res.json({
            msg: "Your kidney is fine"
        });
    }
});


app.listen(port,function(){
});
