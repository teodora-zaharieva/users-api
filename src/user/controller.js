const userService = require('./service')

const getUser = (req, res) => {
  const { username } = req.params

  const foundUser = userService.getUser(username)

  res.json(foundUser)
}

const createUser = (req, res) => {
  const { username, ...userData } = req.body

  const createdUser = userService.createUser(username, userData)

  res.json(createdUser)
}

const updateUser = (req, res) => {
  const { username } = req.params

  const updatedUser = userService.updateUser(username, req.body)

  res.json(updatedUser)
}

const deleteUser = (req, res) => {
  const { username } = req.params

  const deletedUser = userService.deleteUser(username, req.body)

  res.json(deletedUser)
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
