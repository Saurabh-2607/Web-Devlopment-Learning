const express = require('express');

const router = express.Router();

// only admin can access this route

router.get('/admin', (req, res) => {
    res.json({ message: 'Hello Admin' });
    console.log("Admin has accessed the route");
});
    

// both admin and manger can access this route
router.get('/manager', (req, res) => {
    res.json({ message: 'Hello manager' });
    console.log("manger has accessed the route");

});

// all can acess this route
router.get('/user', (req, res) => {
    res.json({ message: 'Hello user' });
    console.log("user has accessed the route");

});

module.exports = router;



