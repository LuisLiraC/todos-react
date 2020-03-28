import { Router } from 'express'
import UserController from '../controllers/user.controller'
import response from '../response'
import validateUserForm from '../middlewares/validateUserForm'

const setCookie = (res, token) => {
  res.cookie('usr-tk', token, {
    httpOnly: true
  })
}

module.exports = (app) => {
  const router = Router()
  app.use('/user', router)
  const userController = new UserController()

  router.post('/sign-in', validateUserForm, async (req, res) => {
    try {
      const token = await userController.signIn(req.username, req.password)
      setCookie(res, token)

      response.sucess(req, res, 'Access allowed')
    } catch (error) {
      console.log(`[ERROR] [User Sign in] ${error.message}`)
      response.error(req, res, error.message, 400)
    }
  })

  router.post('/sign-up', validateUserForm, async (req, res) => {
    try {
      const token = await userController.signUp(rq.username, req.password)
      setCookie(res, token)

      response.sucess(req, res, 'Account registered')
    } catch (error) {
      console.log(`[ERROR] [User Sign up] ${error.message}`)
      response.error(req, res, error.message, 400)
    }
  })

}