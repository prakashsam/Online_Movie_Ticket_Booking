import { Controller, Post, Body, Get, Res, HttpStatus, Param, Put } from '@nestjs/common';
import { Response } from 'express';
import { TheatersDto } from './theaters.dto';
import { TheatersService } from './theaters.service';


@Controller('theaters')
export class TheatersController {
    constructor(private theaterService : TheatersService){
        
    }

    @Post()
    async createTheaters(@Body() theatersDto: TheatersDto) {
        await this.theaterService.theaterCreate(theatersDto);
    }

    @Get()
    async getAllTheaters(@Res() res: Response) {
        const theaters = await this.theaterService.findAllThearers();
       return res.status(HttpStatus.OK).json(theaters);
    }

    @Get(':id')
    async getTheatersById(@Res() res: Response, @Param('id') theaterId: string) {
        const theater = await this.theaterService.findThearersById(theaterId);
        return res.status(HttpStatus.OK).json(theater);
    }

    @Put(':id')
    async update(@Res() res: Response, @Param('id') theaterId: string, @Body() theatersDto: TheatersDto) {
        const theaters = await this.theaterService.UpdateThearer(theaterId, theatersDto);
        return res.status(HttpStatus.OK).json(theaters);
    }
    
 
}
