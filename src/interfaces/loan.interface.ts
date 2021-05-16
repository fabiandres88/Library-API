import { Document } from "mongoose";

export interface ILoan extends Document {
    book: Array<any>,
    dateLoan: string,
    user: string,
    dateBack: string,
}
