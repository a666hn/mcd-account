import * as dotenv from 'dotenv';

dotenv.config();

export const APP_NAME = 'mcd';
export const API = 'api';

// export const GATEWAY_CONNECTION = process.env.AUTH_DB_CONNECTION_NAME;
// export const PRODUCT_CONNECTION = process.env.PRODUCT_DB_CONNECTION_NAME;
export const GATEWAY_CONNECTION = 'mcd-auth-db-dev';
export const PRODUCT_CONNECTION = 'default';
