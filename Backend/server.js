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


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
  });

  
const connection = mongoose.connection;

const userRouter = require("./routes/userRoutes.js");
app.use("/user",userRouter);

connection.once("open", ()=>{
    console.log("MongoDB connection successful!");
});

app.listen(PORT, ()=>{
    console.log("Server is running");
})
