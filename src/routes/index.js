import express from 'express'
// import AuthRoutes from './auth.route.js'
import TaskRoutes from './tasks.route.js'

import authMiddleware from '../middlewares/auth.middlewares.js'

const routes = express.Router()

routes.use('/health', (req, res) =>
  res.status(200).json({ status: 'Server Health Found ok' })
)

// routes.use('/api/v1/auth', AuthRoutes)
// routes.use('/api/v1/users', UserRoutes)
routes.use('/api/v1/task', TaskRoutes)

export default routes
