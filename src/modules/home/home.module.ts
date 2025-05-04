import { Module } from '@nestjs/common';
import { HomeController } from './api/home.controller';

@Module({
  controllers: [HomeController]
})
export class HomeModule {}
