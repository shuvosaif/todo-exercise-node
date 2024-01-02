import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    phone: { type: String, required: true },
    bio: { type: String},
    status: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const userModel = mongoose.model('Users_Collection', userSchema)

export default userModel
