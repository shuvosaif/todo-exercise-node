import taskService from '../services/task.services.js'

const taskController = {}

taskController.create = async (req, res) => {
  try {
    let data = req.body
    // if (req.file.filename) {
    //   data.image = req.file.filename
    // }
    let result = await taskService.create(data)
    res.status(200).json({
      success: true,
      message: 'Task Creation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Task Creation Failed',
      data: error,
    })
  }
}

taskController.updateOne = async (req, res) => {
  try {
    let result = await taskService.updateOne(req.params.id, req.body)
    res.status(200).json({
      success: true,
      message: 'Task Data Updatation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Task Data Updatation Failed',
      data: error,
    })
  }
}

taskController.getOne = async (req, res) => {
  try {
    let result = await taskService.getOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Task Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Task Data Retrivation Failed',
      data: error,
    })
  }
}
taskController.getAll = async (req, res) => {
  try {
    let result = await taskService.getAll()
    res.status(200).json({
      success: true,
      message: 'Task All Data Retrivation Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Task All Data Retrivation Failed',
      data: error,
    })
  }
}

taskController.deleteOne = async (req, res) => {
  try {
    let result = await taskService.deleteOne(req.params.id)
    res.status(200).json({
      success: true,
      message: 'Task Data Deletion Successful',
      data: result,
    })
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Task Data Deletion Failed',
      data: error,
    })
  }
}

export default taskController
