import { Router } from 'express'
import UserController from '../controllers/user.controller'
import response from '../response'
import validateUserForm from '../middlewares/validateUserForm'
import validateToken from '../middlewares/validateToken'

module.exports = (app) => {
  const router = Router()
  app.use('/user', router)
  const userController = new UserController()

  router.post('/sign-in', validateUserForm, async (req, res) => {
    try {
      const token = await userController.signIn(req.username, req.password)
      response.sucess(req, res, token)
    } catch (error) {
      console.log(`[ERROR] [User Sign in] ${error.message}`)
      response.error(req, res, error.message, 400)
    }
  })

  router.post('/sign-up', validateUserForm, async (req, res) => {
    try {
      const token = await userController.signUp(req.username, req.password)
      response.sucess(req, res, token, 201)
    } catch (error) {
      console.log(`[ERROR] [User Sign up] ${error.message}`)
      response.error(req, res, error.message, 400)
    }
  })

  router.post('/verify-token', async (req, res) => {
    const { token } = req.body
    const expiredToken = validateToken(token)
    if (expiredToken) {
      return res.status(401).send('Invalid Cookie')
    }
    return res.status(200).send('Valid Cookie')
  })

}