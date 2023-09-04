import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { CompetitionResultModule } from './competitionResult/competitionResult.module';
import { stdTimeFunctions } from 'pino';
import { ElasticsearchLoggerService } from './logger.service';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PrometheusModule.register(),
    LoggerModule.forRoot({
      pinoHttp: {
        timestamp: stdTimeFunctions.isoTime,
        level: process.env.NODE_ENV !== 'production' ? 'trace' : 'info'
      }
    }),
    MongooseModule.forRootAsync(getMongoConfig()),
    CompetitionResultModule
  ],
  controllers: [],
  providers: [
    ElasticsearchLoggerService, 
    {
      provide: ElasticsearchLoggerService,
      useClass: ElasticsearchLoggerService
    }
  ],
  exports: [ElasticsearchLoggerService]
})
export class AppModule {}
