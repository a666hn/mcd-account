import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

const {
    APP_HOST,
    AUTH_DB_CONNECTION_NAME,
    AUTH_DB_PORT,
    AUTH_DB_USER,
    AUTH_DB_PASSWORD,
    AUTH_DB_NAME,
    PRODUCT_DB_CONNECTION_NAME,
    PRODUCT_DB_PORT,
    PRODUCT_DB_USER,
    PRODUCT_DB_PASSWORD,
    PRODUCT_DB_NAME,
} = process.env;

export = [
    {
        name: PRODUCT_DB_CONNECTION_NAME,
        type: 'postgres',
        host: APP_HOST,
        port: Number(PRODUCT_DB_PORT),
        username: PRODUCT_DB_USER,
        password: PRODUCT_DB_PASSWORD,
        database: PRODUCT_DB_NAME,
        synchronize: true,
        autoLoadEntities: true,
        uuidExtension: 'uuid-ossp',
        entities: [
            join(
                __dirname,
                'databases',
                'postgres',
                'product-db/entities/*.entity{.ts,.js}',
            ),
        ],
    } as TypeOrmModuleOptions,
    {
        name: AUTH_DB_CONNECTION_NAME,
        type: 'postgres',
        host: APP_HOST,
        port: AUTH_DB_PORT,
        username: AUTH_DB_USER,
        password: AUTH_DB_PASSWORD,
        database: AUTH_DB_NAME,
        synchronize: true,
        autoLoadEntities: true,
        uuidExtension: 'uuid-ossp',
        entities: [
            join(
                __dirname,
                'databases',
                'postgres',
                'auth-db/entities/*.entity{.ts,.js}',
            ),
        ],
    },
];
