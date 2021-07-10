import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { PostgresModule } from './databases/postgres/postgres.module';
import { AccountModule, GatewayModule } from './module.list';

dotenv.config();

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PostgresModule,

        // Credentials Module
        ...GatewayModule,

        // Account Module
        ...AccountModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
