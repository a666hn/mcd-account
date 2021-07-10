import { BasicAuthCredentialEntity } from 'src/databases/postgres/auth-db/entities/credential.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(BasicAuthCredentialEntity)
export class BasciAuthCredentialsRepository extends Repository<BasicAuthCredentialEntity> {}
