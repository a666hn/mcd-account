import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { API, APP_NAME } from './dictionaries/global.dictionary';
import { Run } from './run';
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const { APP_PORT } = process.env;

    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix(`${APP_NAME}/${API}`);

    await app.listen(APP_PORT || 3000, () => Run());
}
bootstrap();
