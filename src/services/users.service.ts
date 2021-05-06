import { IUser } from "../interfaces/user.interface";
import { UsersRepository } from "../repositories/users.repository";

export class UsersService {
    private  usersRepository: UsersRepository
    constructor() { 
        this.usersRepository= new UsersRepository()
    }
    async getUserById(userId: IUser["_id"]): Promise<IUser | null> {
        const user = await this.usersRepository.findUserById(userId);
        return user;
    }

    async createUser(user: IUser): Promise<IUser> {
        const createResult = await this.usersRepository.createUser(user);
        return createResult;
    }

    async updateUser(userId: IUser["_id"], fieldsToUpdate: any): Promise<IUser | null> {
        const updateResult = await this.usersRepository.updateUserById(userId, fieldsToUpdate);
        return updateResult;
    }

    async deleteUser(userId: IUser["_id"]): Promise<IUser | null> {
        const removeResult = await this.usersRepository.removeUser(userId);
        return removeResult;
    }
}
