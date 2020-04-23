import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>) {
    }

    async userCreate(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
}
