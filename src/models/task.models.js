import mongoose from 'mongoose'

const taskSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const taskModel = mongoose.model('Task_Collection', taskSchema)

export default taskModel
