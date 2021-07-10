import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasciAuthCredentialsRepository } from 'src/applications/repositories/basic-auth-credentials.repository';
import { GATEWAY_CONNECTION } from 'src/dictionaries/global.dictionary';

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [BasciAuthCredentialsRepository],
            GATEWAY_CONNECTION,
        ),
    ],
    exports: [TypeOrmModule],
})
export class CredentialsModule {}
