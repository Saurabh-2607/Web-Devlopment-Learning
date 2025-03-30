const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`);
    }
    catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = dbConnect;