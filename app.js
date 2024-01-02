import express from 'express'
import cors from 'cors'
import databaseConnection from './src/config/db.js'
import config from './src/config/index.js'
import allRoute from './src/routes/index.js'

const app = express()

//database connection imported from db.js file
databaseConnection()

app.use(express.json())
app.use(cors('http://localhost:3000'))

app.use('/', allRoute)

app.listen(config.port, () => {
  try {
    console.log('To Do Applicatiion Server Is Running Smoothly')
  } catch (error) {
    console.log('To Do Applicatiion Server Connection Failed')
  }
})
