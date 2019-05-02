import axios from "axios";
// require("dotenv").config();
// I tried using process.env.API_Key but that did not work
export default {
    getBooks: function(query){
        let newQuery = query.replace(/\s/g, '+');
        console.log(newQuery);
        const URL = "https://www.googleapis.com/books/v1/volumes?q=" + newQuery + "&maxResults=5&key=AIzaSyAhJ6gRIFZDvC3q53YDILOxEbOYJ8GxdN4";
        return axios.get(URL);
    },

    getSavedBooks: function() {
        return axios.get("/api/books");
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }

};