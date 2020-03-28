import axios from 'axios'
import config from '../config'

export default class UserController {

  async signIn(username, password) {
    try {      
      const { data: { response } } = await axios(`${config.apiUrl}/api/users/sign-in`, {
        method: "POST",
        data: {
          username,
          password
        }
      })
      return response
    } catch (error) {
      console.log(error.message)
      throw new Error('Invalid information')
    }
  }

  async signUp(username, password) {
    try {
      const { data: { response } } = await axios(`${config.apiUrl}/api/users/sign-up`, {
        method: "POST",
        data: {
          username,
          password
        }
      })  
      return response
    } catch (error) {
      console.log(error.message)
      throw new Error('Unexpected Error')
    }
  }
}