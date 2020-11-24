var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true,
        unique: true
    },
    available: {
        type: Boolean,
        required: true,
        unique: true
    }
})

var Books = mongoose.model('Book', booksSchema);

module.exports = Books;