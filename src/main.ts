import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Cookies
  // https://docs.nestjs.com/techniques/cookies
  app.use(cookieParser());

  app.enableCors({
    origin: true,
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  const { APP_PORT } = process.env;
  console.debug('app run om port: ', APP_PORT);
  await app.listen(APP_PORT);
}
bootstrap();
