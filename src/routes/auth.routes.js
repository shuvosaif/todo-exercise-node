import { Router } from 'express'
import authController from '../controllers/auth.controllers.js'
import userSchema from '../schemas/user.schemas.js'
//import validateMiddleware from '../middlewares/validate.middlewares.js'
//import UploadMiddleware from '../middlewares/upload.middlewares.js'

//const { validateRequest } = validateMiddleware

const route = Router()

// route.post(
//   '/register',
//   UploadMiddleware.upload.single('avatar'),
//   validateRequest(userSchema.create),
//   authController.register
// )

route.post('/register', authController.register)
route.post('/login', authController.login)

export default route
