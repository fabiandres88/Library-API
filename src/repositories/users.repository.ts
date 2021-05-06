import { IUser } from "../interfaces/user.interface";
import Users from "../models/users.model";

export class UsersRepository {
    async findUserById(userId: number): Promise<IUser | null> {
        const user: IUser | null = await Users.findOne({_id: userId}).lean();
        return user;
    }

    async createUser(user: IUser): Promise<IUser> {
        const createResult = await Users.create(user);
        return createResult;
    }

    async updateUserById(userId: IUser["_id"], fieldsToUpdate: any): Promise<IUser | null> {
        const updateResult = await Users.findByIdAndUpdate(userId, {$set: fieldsToUpdate});
        return updateResult;
    }

    async removeUser(userId: IUser["_id"]): Promise<IUser | null> {
        const removeResult = await Users.findByIdAndRemove(userId);
        return removeResult;
    }
}
