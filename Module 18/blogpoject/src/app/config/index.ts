import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
  jwt_access_expires_in:process.env.jwt_access_expires_in,
  jwt_refresh_secret:process.env.jwt_refresh_secret,
  jwt_refresh_expires_in:process.env.jwt_refresh_expires_in,
  NODE_ENV: process.env.NODE_ENV,
};