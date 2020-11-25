var mongoose = require('mongoose');
const { schema } = require('./users');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Books',
        required: true,
        unique: true
    },
    dateLoan: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    
    dateBack: {
        type: Date,
        default: null
    }
});

var Loans = mongoose.model('Loan', loanSchema);

module.exports = Loans;