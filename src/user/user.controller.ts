import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('signup')
    async signupUser(
        @Body() userData: Prisma.UserCreateInput
    ) {
        return this.userService.createUser(userData)
    }
}
