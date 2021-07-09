import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (env: ConfigService) => ({
                type: 'postgres',
                name: env.get('AUTH_DB_CONNECTION_NAME'),
                host: env.get('APP_HOST'),
                port: env.get('AUTH_DB_PORT'),
                username: env.get('AUTH_DB_USER'),
                password: env.get('AUTH_DB_PASSWORD'),
                database: env.get('AUTH_DB_NAME'),
                synchronize: true,
                autoLoadEntities: true,
                uuidExtension: 'uuid-ossp',
                entities: [],
            }),
        }),
    ],
})
export class PostgresModule {}
