import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserModule } from './user.module';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-User.dto';
import { UpdateUserDto } from './dto/update-User.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async signupUser(
        @Body(new ValidationPipe()) userData: CreateUserDto
    ) {
        return this.userService.createUser(userData)
    }



    @UseGuards(AuthGuard)
    @Get(':id')
async getUser(@Param('id', ParseIntPipe) id: number): Promise<Omit<UserModule, 'password'> | null> {
        return this.userService.user({id})
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async putUser(@Body(new ValidationPipe()) userData: UpdateUserDto, @Param('id', ParseIntPipe) id: number): Promise<UserModule> {
        return this.userService.updateUser({where: {id}, data: userData})
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserModule> {
        return this.userService.deleteUser({id})
    }
}
