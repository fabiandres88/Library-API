import { Controller, Get, Post, Body, Param, Put } from "routing-controllers";
import { ILoan } from "../interfaces/loan.interface";
import { LoansService } from "../services/loans.service";

@Controller("/loans")
export default class LoansController {
    protected loansService: LoansService;
    constructor() {
        this.loansService = new LoansService;
    }

    @Get('/')
    findLoans() {
        return this.loansService.getLoans();
    }

    @Post('/create')
    createLoan(@Body() newLoan: ILoan) {
        return this.loansService.createLoan(newLoan);
    }

    @Put('/:loanId')
    findLoanById(@Param("loanId") loanId: string) {
        const loan = { dateBack: new Date() };
        return this.loansService.updateLoan(loanId, loan);
    }

}
