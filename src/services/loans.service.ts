import { Service } from "typedi";
import { ILoan } from "../interfaces/loan.interface";
import { LoansRepository } from "../repositories/loans.repository";

@Service()
export class LoansService {
    protected loansRepository: LoansRepository;
    constructor() {
        this.loansRepository = new LoansRepository();
    }

    getLoans(): Promise<ILoan[]> {
        return this.loansRepository.findAllLoans();
    }

    createLoan(newLoan: any): Promise<ILoan> {
        const newloandToSave = {...newLoan, dateLoan: new Date()}
        return this.loansRepository.createLoan(newloandToSave);
    }

    updateLoan(loanId: string, loan: any) {        
        return this.loansRepository.findLoanById(loanId, loan);
    }
}
