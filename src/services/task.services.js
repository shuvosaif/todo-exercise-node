import taskModel from '../models/task.models.js'

const taskServices = {}

taskServices.create = async (payload) => {
  try {
    let result = await taskModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
taskServices.updateOne = async (id, payload) => {
  try {
    let result = await taskModel.findByIdAndUpdate({ _id: id }, payload)
    return result
  } catch (error) {
    throw error
  }
}
taskServices.getOne = async (id) => {
  try {
    let result = await taskModel.findOne({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}
taskServices.getAll = async () => {
  try {
    let result = await taskModel.find()
    return result
  } catch (error) {
    throw error
  }
}
taskServices.deleteOne = async (id) => {
  try {
    let result = await taskModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default taskServices
