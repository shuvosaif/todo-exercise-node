import mongoose from 'mongoose'
import config from './index.js'

mongoose.set('strictQuery', true)

const databaseConnection = async () => {
  try {
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    await mongoose.connect(config.databaseUrl, OPTIONS)
    console.log('To Do App Database Connected Successfully')
  } catch (error) {
    console.log('Database Connection Failed')
    process.exit(1)
  }
}

export default databaseConnection
