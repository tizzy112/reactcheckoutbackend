const express = require ("express")
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();

const app = express();


//using cors middleware
app.use(cors())

//import our route to our index.js module
const productRoute = require("./route/productRoute")



//importing our db from mongodb
const db = require("./DB/conn")




//using this middleware to process requeste from consumer
//using this middleware to process request from consumers, it works for post, patch, put requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//connecting to our  database 
db.on("error", (error)=>console.log(error));
db.once("open",()=>console.log("Connected to Database"));

//our routes that works for product
app.use("/api/v1/", productRoute)

//my port 
const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})