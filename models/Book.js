const mongoose = require("mongoose");

// Reference to the Schema constructor
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String
    },
    authors: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String,
        data: Buffer
    },
    link: {
        type: String
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;

