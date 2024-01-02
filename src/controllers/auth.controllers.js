import userService from '../services/user.services.js'
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken'
import config from '../config/index.js'
import AuthUtils from '../utils/auth.utils.js'

const authController = {}

authController.register = async (req, res) => {
  try {
    let data = req.body
    console.log(data)
    data.password = await bcrypt.hash(data.password, 10)
    data.avatar = req.file.filename
    let result = await userService.register(data)
    res.status(200).json({
      success: true,
      message: 'Successfully registered',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Registration Failed',
      data: error,
    })
  }
}
authController.login = async (req, res) => {
  try {
    let user = await userService.findByUserName(req.body.userName)
    if (user) {
      let match = await bcrypt.compare(req.body.password, user.password)
      //generate Token
      let token = AuthUtils.jwtEncode(user)

      if (match) {
        res.status(200).json({
          success: true,
          message: 'Login Successfully',
          data: user,
          token: token,
        })
      } else {
        res.status(200).json({
          success: false,
          message: ' Failed To Login',
        })
      }
    } else {
      res.send('Authentication Failed')
    }
  } catch (error) {
    console.log(error)
  }
}

export default authController
