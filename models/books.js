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
        required: true
    },
    genre: {
        type: String,
        required: true        
    }
})

var Books = mongoose.model('Book', booksSchema);

module.exports = Books;