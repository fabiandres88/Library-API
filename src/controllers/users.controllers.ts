import { Body, Delete, Get, JsonController, NotFoundError, Param, Post, Put } from "routing-controllers";
import { IUser } from "../interfaces/user.interface";
import { UsersRepository } from "../repositories/users.repository";
import { UsersService } from "../services/users.service";

@JsonController("/users")
export class UsersController {
    protected usersService: UsersService
    protected usersRepository: UsersRepository
    constructor() {
        this.usersRepository = new UsersRepository()
        this.usersService = new UsersService()
    }

    @Get("/:userId")
    async findUserById(@Param("userId") userId: string) {
        const user = this.usersService.getUserById(userId);
        if (!user) return new NotFoundError("User not found");
        return user;
    }

    @Post("/")
    async createUser(@Body() user: IUser) {
        return await this.usersService.createUser(user);
    }

    @Put("/:userId")
    async updateUser(@Param("userId") userId: string, @Body() fields: any) {
        const updateResult = await this.usersService.updateUser(userId, fields);
        if (!updateResult) return new NotFoundError("User Not Found");
        return updateResult;
    }

    @Delete("/:userId")
    async removeUser(@Param("userId") userId: string) {
        const removeResult = await this.usersService.deleteUser(userId);
        if (!removeResult) return new NotFoundError("User Not Found");
        return {
            result: "User deleted"
        };
    }
}
