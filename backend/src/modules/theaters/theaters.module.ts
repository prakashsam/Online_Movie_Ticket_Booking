import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TheatersSchema } from './theaters.schema';
import { TheatersController } from './theaters.controller';
import { TheatersService } from './theaters.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Theaters', schema: TheatersSchema }])],
    controllers: [TheatersController],
    providers: [TheatersService]
})
export class TheatersModule {}
