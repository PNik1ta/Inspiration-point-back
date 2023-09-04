import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { Request, Response } from 'express';
import { ElasticsearchLoggerService } from './logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerService = app.get(ElasticsearchLoggerService);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://inponline.store',
      'http://www.inponline.store',
      'https://inponline.store',
      'https://www.inponline.store',
      'https://inponline.ru',
      'http://localhost:4200'
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Inspiration point')
    .setDescription('Inspiration point API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use((req: Request, res: Response, next) => {
    express.json()(req, res, () => {
      loggerService.logHTTPRequest(req.method, req.url, JSON.stringify(req.body), res.statusCode);
      next();
    })
  })

  await app.listen(3000);
}
bootstrap();
