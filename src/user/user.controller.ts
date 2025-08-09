import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma';
import { UserModule } from './user.module';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async signupUser(
        @Body() userData: Prisma.UserCreateInput
    ) {
        return this.userService.createUser(userData)
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUser(@Param('id') id: string): Promise<UserModule | null> {
        return this.userService.user({id: Number(id)})
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async putUser(@Body() userData: Prisma.UserUpdateInput, @Param('id') id: string): Promise<UserModule> {
        return this.userService.updateUser({where: {id: Number(id)}, data: userData})
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<UserModule> {
        return this.userService.deleteUser({id: Number(id)})
    }
}
