import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { TheatersModule } from './modules/theaters/theaters.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://musicnode:0kUFUVp96EigNqAe@cluster0-ebrik.mongodb.net/ticket_booking?retryWrites=true&w=majority'),
    UserModule,
    TheatersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
