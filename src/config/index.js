import dotenv from 'dotenv'
import { join } from 'path'

dotenv.config({ path: join(process.cwd(), '.env') })

const config = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  environment: process.env.ENVIRONMENT,
  secretKey: process.env.JWT_SECRET,
  expireTime: process.env.JWT_EXPIRE_TIME,
  accToken: process.env.ACC_TOKEN,
  refToken: process.env.REF_TOKEN,
}

export default config
