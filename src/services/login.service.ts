import { Service } from "typedi";
import jwt from 'jsonwebtoken';

@Service()
export class LoginService {
    constructor() { }

    getToken(email: string) {
        var token = jwt.sign({ email: email }, `${process.env.JWT_KEY}`, { expiresIn: 60 * 60 })
        return { "Token": token };
    }
}
