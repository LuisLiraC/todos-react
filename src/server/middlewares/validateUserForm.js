import response from '../response'

export default function (req, res, next) {
  const { username, password } = req.body

  if (!username || !password) {
    return response.error(req, res, 'Username and password are required', 400)
  }

  req.username = username
  req.password = password
  next()
}