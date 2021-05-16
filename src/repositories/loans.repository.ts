import { ILoan } from "../interfaces/loan.interface";
import Loans from "../models/loans.model";

export class LoansRepository {
    async findAllLoans(): Promise <ILoan[]> {
        return await Loans.find({}).populate('book').populate('user');        
    }

    async createLoan(newLoan: ILoan): Promise <ILoan> {
        return await Loans.create(newLoan);
    }

    async findLoanById (loanId: string, loan: any) {
        return await Loans.findByIdAndUpdate(loanId, {$set: loan});
    }
}
