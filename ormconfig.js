/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const join = require('path').join;

dotenv.config();

const {
    APP_HOST,
    AUTH_DB_USER,
    AUTH_DB_PASSWORD,
    AUTH_DB_NAME,
    AUTH_DB_PORT,
    AUTH_DB_CONNECTION_NAME,
    PRODUCT_DB_USER,
    PRODUCT_DB_PASSWORD,
    PRODUCT_DB_NAME,
    PRODUCT_DB_PORT,
    PRODUCT_DB_CONNECTION_NAME,
} = process.env;

module.exports = [
    {
        type: 'postgres',
        host: APP_HOST,
        username: AUTH_DB_USER,
        password: AUTH_DB_PASSWORD,
        database: AUTH_DB_NAME,
        port: AUTH_DB_PORT,
        name: AUTH_DB_CONNECTION_NAME,
        entities: [
            join(
                process.cwd(),
                'dist',
                'databases',
                'auth-db',
                'postgres',
                'entities',
                '*.entity{.ts,.js}',
            ),
        ],
        migrations: [
            join(process.cwd(), 'dist', 'migrations', 'auth-db', '*{.ts,.js}'),
        ],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: true,
    },
    {
        type: 'postgres',
        host: APP_HOST,
        username: PRODUCT_DB_USER,
        password: PRODUCT_DB_PASSWORD,
        database: PRODUCT_DB_NAME,
        port: PRODUCT_DB_PORT,
        name: PRODUCT_DB_CONNECTION_NAME,
        entities: [
            join(
                process.cwd(),
                'dist',
                'databases',
                'product-db',
                'postgres',
                'entities',
                '*.entity{.ts,.js}',
            ),
        ],
        migrations: [
            join(
                process.cwd(),
                'dist',
                'migrations',
                'product-db',
                '*{.ts,.js}',
            ),
        ],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: true,
    },
];
