const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;


mongoose.connect(URL);

  
const connection = mongoose.connection;

const recordRouter = require("./routes/recordsRoutes");

app.use("/record",recordRouter);

connection.once("open", ()=>{
    console.log("MongoDB connection successful!");
});

app.listen(PORT, ()=>{
    console.log("Server is running");
})
