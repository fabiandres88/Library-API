import mongoose, { Schema } from 'mongoose';
import { ILoan } from "../interfaces/loan.interface";

const loanSchema: Schema = new Schema({
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

export default mongoose.model<ILoan>('Loan', loanSchema);
