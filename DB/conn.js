//here we require mongoose to our module after installing it with npm
const mongoose = require("mongoose")

//here we import our .env file because we have our database link init which is MONGODB_CONNECTION_STRING
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING
)


//here we give our data base connection into a variable
const db = mongoose.connection;

// here we are exporting our database
module.exports= db;