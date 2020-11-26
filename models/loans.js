var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    book: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }],
    dateLoan: {
        type: Date,
        required: true,
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    dateBack: {
        type: Date,
        default: null
    }
});

var Loans = mongoose.model('Loan', loanSchema);

module.exports = Loans;