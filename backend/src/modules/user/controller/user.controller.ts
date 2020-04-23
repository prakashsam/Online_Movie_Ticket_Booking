import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }
    @Post()
    async userRegister(@Body() createUserDto: CreateUserDto) {
        console.log('connecnt')
        await this.userService.userCreate(createUserDto);
    }

}
