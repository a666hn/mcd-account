import { BasicAuthCredentialsEntity } from 'src/databases/postgres/auth-db/entities/basicauth-credentials.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(BasicAuthCredentialsEntity)
export class BasciAuthCredentialsRepository extends Repository<BasicAuthCredentialsEntity> {}
