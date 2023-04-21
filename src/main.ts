import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://frontend-ammo-varejo-challenge.vercel.app/'],
    methods: 'GET',
    credentials: true,
  });
  await app.listen(port);
}
bootstrap();
