const sucess = (req, res, response = '', status = 200) => {
  res.status(status).send({
    response,
    error: false
  })
}

const error = (req, res, response = 'Internal server error', status = 500) => {
  res.status(status).send({
    response,
    error: true
  })
}

export default {
  sucess,
  error
}