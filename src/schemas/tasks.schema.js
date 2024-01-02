import { number, object, string, boolean, date } from 'yup'
//import userConstant from '../constants/index.js'

const taskSchema = {}

taskSchema.create = object().shape({
  title: string().required('title  is Required!'),
})
taskSchema.update = object().shape({
  title: string().required('title  is Required!'),
})
export default taskSchema
