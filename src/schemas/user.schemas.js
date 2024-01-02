import { object, string, number, array, mixed, boolean } from 'yup'
//import globalConst from '../constants/global.const.js'

//const { usernameExp, mobileExp } = globalConst.regexp

const userSchema = {}

userSchema.create = object().shape({
  name: string().required('Name is Required!'),
  email: string().required('Email is Required!'),
  userName: string().required('User Name is Required!'),
  password: string().required('Password is Required!'),
  avatar: string(),
  phone: string().required('Phone Is Required'),
  bio: string(),
  status: boolean().required('Status is Required!'),
})

userSchema.update = object().shape({
  name: string().optional('Name is Required!'),
  userName: string().optional('UserName is Required!'),
  password: string().optional('Password is Required!'),
  avatar: string().optional('Avatar is Required!'),
  phone: string().optional('Phone is Required!'),
  bio: string().optional('Address is Required!'),
})

export default userSchema
