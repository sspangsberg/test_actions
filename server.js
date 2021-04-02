const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.get("/welcome", (req,res) => {
    res.status(200).send({message: "I'm alive..."});
  }); 

app.get("/f1", (req,res) => {
    res.status(200).send({message: "Hey I'm a new feature..."});
  }); 

//connect to the MongoDB using Mongoose ODM
mongoose.connect (
  process.env.DBHOST,  { useUnifiedTopology: true, useNewUrlParser: true }
).catch(error => console.log("Error connecting to MongoDB: " + error));

mongoose.connection.once('open', () => console.log('Connected succesfully to MongoDB'));



//Simulate db connection
console.log("DBHOST:" + process.env.DBHOST);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
  });

module.exports = app;