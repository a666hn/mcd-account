import { CredentialsModule } from './interfaces/gateway/credentials/credentials.module';
import { UsersModule } from './interfaces/rest/users/users.module';

export const GatewayModule = [CredentialsModule];

export const AccountModule = [UsersModule];
