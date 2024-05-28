import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";


const PORT = 8001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix('/api');

  await app.listen(PORT);
}

bootstrap().catch(console.error);

