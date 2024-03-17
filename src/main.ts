/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie: { 
        maxAge: 6000,
        secure: true 
      
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
