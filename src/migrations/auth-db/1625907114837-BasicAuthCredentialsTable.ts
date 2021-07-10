import { BASIC_AUTH_CREDENTIALS_ENTITY } from 'src/dictionaries/entities.dictionary';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BasicAuthCredentialsTable1625907114837
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: BASIC_AUTH_CREDENTIALS_ENTITY,
                columns: [
                    {
                        name: 'id',
                        isPrimary: true,
                        type: 'uuid',
                        isUnique: true,
                        isNullable: false,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'username',
                        isNullable: false,
                        isUnique: true,
                        type: 'varchar',
                    },
                ],
            }),
            true,
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE ${BASIC_AUTH_CREDENTIALS_ENTITY}`);
    }
}
