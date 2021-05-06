import { Document } from "mongoose";

export interface IUser extends Document {
    fisrtName: string,
    lastName: string,
    dni: string,
    email: string,
    phone: string,
    password: string,
}
