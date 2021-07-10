import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'src/applications/repositories/users.repository';
import { PRODUCT_CONNECTION } from 'src/dictionaries/global.dictionary';

@Module({
    imports: [TypeOrmModule.forFeature([UsersRepository], PRODUCT_CONNECTION)],
    exports: [TypeOrmModule],
})
export class UsersModule {}
