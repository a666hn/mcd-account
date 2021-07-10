import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import {
    GATEWAY_CONNECTION,
    PRODUCT_CONNECTION,
} from 'src/dictionaries/global.dictionary';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            name: GATEWAY_CONNECTION,
            inject: [ConfigService],
            useFactory: async (env: ConfigService) => ({
                type: 'postgres',
                host: env.get('APP_HOST'),
                port: Number(env.get('AUTH_DB_PORT')),
                username: env.get('AUTH_DB_USER'),
                password: env.get('AUTH_DB_PASSWORD'),
                database: env.get('AUTH_DB_NAME'),
                synchronize: true,
                autoLoadEntities: true,
                uuidExtension: 'uuid-ossp',
                entities: [
                    join(
                        __dirname,
                        'databases',
                        'postgres',
                        'auth-db/entities/*.entity.{ts,js}',
                    ),
                ],
            }),
        }),
        TypeOrmModule.forRootAsync({
            name: PRODUCT_CONNECTION,
            inject: [ConfigService],
            useFactory: async (env: ConfigService) => ({
                type: 'postgres',
                host: env.get('APP_HOST'),
                port: Number(env.get('PRODUCT_DB_PORT')),
                username: env.get('PRODUCT_DB_USER'),
                password: env.get('PRODUCT_DB_PASSWORD'),
                database: env.get('PRODUCT_DB_NAME'),
                synchronize: true,
                autoLoadEntities: true,
                uuidExtension: 'uuid-ossp',
                entities: [
                    join(
                        __dirname,
                        'databases',
                        'postgres',
                        'product-db/entities/*.entity.{ts,js}',
                    ),
                ],
            }),
        }),
    ],
})
export class PostgresModule {}
