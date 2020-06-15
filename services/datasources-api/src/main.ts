import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Connection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const connection = await app.resolve(Connection);

  console.info('Running migrations...');
  await connection.runMigrations({ transaction: 'each' });
  console.info('Migrations done');

  await app.listen(3000);
}
bootstrap();
