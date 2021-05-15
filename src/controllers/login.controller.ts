import { Controller, Get, Param } from "routing-controllers";
import { LoginService } from "../services/login.service";

@Controller("/login")
export default class LoginController {
    protected loginService: LoginService;
    constructor() {
        this.loginService = new LoginService();
    }

    @Get('/:email')
    login(@Param('email') email: string) {
        return this.loginService.getToken(email);
    }
}
