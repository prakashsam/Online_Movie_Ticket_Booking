import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Theaters } from './theaters.interface';
import { TheatersDto } from './theaters.dto';

@Injectable()
export class TheatersService {
    constructor(@InjectModel('Theaters') private theaterModel: Model<Theaters>) {
    }

    async theaterCreate(theatersDto: TheatersDto): Promise<Theaters> {
        const createdTheater = new this.theaterModel(theatersDto);
        return createdTheater.save();
    }

    async findAllThearers(): Promise<Theaters[]> {
        return await this.theaterModel.find();
    }

    async findThearersById(theaterId): Promise<Theaters> {
        return await this.theaterModel.findById(theaterId)
    }
    async UpdateThearer(theaterId, theatersDto): Promise<any> {
        return await this.theaterModel.updateOne({
           _id: theaterId
        }, theatersDto);
    }
}
