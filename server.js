const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const axios = require("axios");
// const db = require(".models");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", {useNewUrlParser : true});


// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books", {
  // db.Book.find({})
  // GET REQUEST TO RETURN ALL SAVED BOOKS
})

app.post("/api/books", {
  // POST to save
})

app.delete("/api/books/:id", {
  // remove by id
})

// Send every other request to the React app
// Define any API routes before this runs
// if you don't get to API routres... go to the React App index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
