import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PukpukGateway } from './pukpuk.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PukpukGateway],
})
export class AppModule {}
