import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { TheatersModule } from './modules/theaters/theaters.module';

@Module({
  imports: [MongooseModule.forRoot('mongo url'),
    UserModule,
    TheatersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
