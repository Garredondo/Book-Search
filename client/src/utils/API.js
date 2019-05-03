import axios from "axios";
// require("dotenv").config({path: "./.env"});
// I tried using process.env.API_Key but that did not work
export default {
    getBooks: function(query){
        return axios.get("/api/search/" + query);
    },

    getSavedBooks: function() {
        return axios.get("/api/books/saved");
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }

};