import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { ConfigModule } from '@nestjs/config';
import { CompetitionResultModule } from './competitionResult/competitionResult.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRootAsync(getMongoConfig()),
    CompetitionResultModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
