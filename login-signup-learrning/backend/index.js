const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('//your mongo DB URL', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// User schema and model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/signup', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const newUser = new User({ email, username, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
        console.log("User Created Sucessfully")
        console.log( email, username, password)
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
        console.log(error)
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log("Login Attempted")
        console.log(username, password)
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user: { email: user.email, username: user.username } });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
});
    


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});