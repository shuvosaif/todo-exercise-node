import userModel from '../models/user.models.js'

const userService = {}

userService.register = async (payload) => {
  try {
    let result = await userModel.create(payload)
    return result
  } catch (error) {
    throw error
  }
}
userService.findByUserName = async (userName) => {
  try {
    let result = await userModel.findOne({ userName }).lean()
    return result
  } catch (error) {
    throw error
  }
}
userService.updateOne = async (id, payload) => {
  try {
    let result = await userModel.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    })
    return result
  } catch (error) {
    throw error
  }
}

userService.getOne = async (id) => {
  try {
    let result = await userModel.findById({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

userService.getAll = async () => {
  try {
    let result = await userModel.find()
    //console.log(result)
    return result
  } catch (error) {
    throw error
  }
}

userService.deleteOne = async (id) => {
  try {
    let result = await userModel.findByIdAndDelete({ _id: id })
    return result
  } catch (error) {
    throw error
  }
}

export default userService
