import jwt from 'jsonwebtoken'
import config from '../config'

export default function verifyToken(token) {
  const res = jwt.verify(token, config.authSecret, (err, result) => {
    if(err) {
      return true
    } else {
      return false
    }
  })

  return res
}