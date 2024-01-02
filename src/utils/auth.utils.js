import DeviceDetector from 'node-device-detector'
import Jwt from 'jsonwebtoken'
import config from '../config/index.js'

const AuthUtils = {}

AuthUtils.jwtDecode = (token) => {
  try {
    const decoded = Jwt.verify(token, config.secretKey)
    return { valid: true, expired: false, decoded }
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: false,
    }
  }
}

AuthUtils.jwtEncode = (payload) => {
  try {
    let token = Jwt.sign(payload, config.secretKey, {
      expiresIn: config.expireTime,
    })
    return token
  } catch (error) {
    throw error
  }
}

export default AuthUtils
