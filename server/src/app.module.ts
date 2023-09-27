import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { stdTimeFunctions } from 'pino';
import { ElasticsearchLoggerService } from './logger.service';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { JSONWebsocketGateway } from './websocket.gateway';
import { CompetitionModule } from './competition/competition.module';

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
    CompetitionModule
  ],
  controllers: [],
  providers: [
    ElasticsearchLoggerService,
    {
      provide: ElasticsearchLoggerService,
      useClass: ElasticsearchLoggerService
    },
    JSONWebsocketGateway
  ],
  exports: [ElasticsearchLoggerService]
})
export class AppModule { }
