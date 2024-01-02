import { Router } from 'express'
// import validateMiddleware from '../middlewares/validate.middlewares.js'
import taskController from '../controllers/task.controllers.js'
//import taskUploadMiddleware from '../middlewares/task.upload.middlewares.js'
//import taskSchema from '../schemas/task.schemas.js'

const route = Router()

// route.post(
//   '/',
//   blogUploadMiddleware.upload.single('image'),
//   validateMiddleware.validateRequest(taskSchema.create),
//   taskController.create
// )
route.post('/', taskController.create)
// route.put(
//   '/:id',
//   validateMiddleware.validateRequest(taskSchema.update),
//   taskController.updateOne
// )
route.put('/:id', taskController.updateOne)
route.get('/:id', taskController.getOne)
route.get('/', taskController.getAll)
route.delete('/:id', taskController.deleteOne)

export default route
