const userService = require('./service')

const createUser = (req, res) => {
  const { username, ...userData } = req.body

  const createdUser = userService.createUser(username, userData)

  res.json(createdUser)
}

module.exports = {
  createUser
}
