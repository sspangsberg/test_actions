const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.get("/welcome", (req,res) => {
    res.status(200).send({message: "I'm alive..."});
  }); 

//Simulate db connection
console.log("DBHOST:" + process.env.DBHOST);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
  });