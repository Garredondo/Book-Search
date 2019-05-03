require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");


// console.log(process.env.API_Key);
const axios = require("axios");
// const db = require(".models");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here ======== 

app.get("/api/search/:title", function (req, res){
  let query = req.params.title
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=5&key=" + process.env.API_Key)
  .then(function(response){
    res.json(response.data);
  })
  .catch(function(err){
    console.log(err)
  });
});






      


// app.get("/api/books", function(req, res) {
//   db.Book.find({})
//   .then(function(data){
//       res.json(data);
//   })
//   .catch(function (err){
//     res.json(err);
//   });
// });

app.post("/api/books", function(req, res) {
  db.Book.create(result)
  .then(function (data){
    console.log(data);
  })
  .catch(function (err){
    console.log(err);
  });
  res.send("Book saved.");
});

// app.delete("/api/books/:id", function(req, res){
//   db.Book.findOneAndRemove({_id: req.params.id}, function (err){
//     res.json(err);
//   });
// });

// Send every other request to the React app
// Define any API routes before this runs
// if you don't get to API routres... go to the React App index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
