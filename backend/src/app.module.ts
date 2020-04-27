import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongo db url here'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
