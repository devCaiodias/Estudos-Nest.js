import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma';
import { UserModule } from './user.module';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async signupUser(
        @Body() userData: Prisma.UserCreateInput
    ) {
        return this.userService.createUser(userData)
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<UserModule | null> {
        return this.userService.user({id: Number(id)})
    }

    @Put(':id')
    async putUser(@Body() userData: Prisma.UserUpdateInput, @Param('id') id: string): Promise<UserModule> {
        return this.userService.updateUser({where: {id: Number(id)}, data: userData})
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<UserModule> {
        return this.userService.deleteUser({id: Number(id)})
    }
}
