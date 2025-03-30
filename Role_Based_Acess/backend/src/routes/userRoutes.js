const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();

// only admin can access this route

router.get('/admin', verifyToken, (req, res) => {
    res.json({ message: 'Hello Admin' });
    console.log(`Admin ${req.user.username} has accessed the route`);
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



