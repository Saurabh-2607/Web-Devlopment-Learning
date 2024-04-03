// cretaing an  http server
// using express

// const express = require("express");
// const { get } = require("http");

// const app = express();

// function sum(n) {
//     let ans = 0
//     for( let i = 0; i<= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get("/", function(req, res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi your answer is " + ans);
// })

// app.listen(3000);







const express = require("express");
const app = express();

var users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function(req, res){
    const johnKideneys = users[0].kidneys;
    const numberOfKIdneys = johnKideneys.length;
    const numberofHealthyKidneys = 0;
    for (let i = 0; i<johnKideneys.length; i++){
        if( johnKideneys[i].length){
            numberofHealthyKidneys = numberofHealthyKidneys + i;
        }
    }
    const numberofunHealthyKidneys = numberOfKIdneys - numberofHealthyKidneys;
    res.json({
        numberOfKIdneys,
        numberofHealthyKidneys,
        numberofunHealthyKidneys,
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Done!"
    })
})



app.listen(3000);