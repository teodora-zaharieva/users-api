const userService = require('./service')

const getUser = async (req, res) => {
  const foundUser = await userService.getUser(req.params.username)

  foundUser.error
    ? res.status(400).json({ error: foundUser.error })
    : res.status(200).json({ data: foundUser })
}

const createUser = async (req, res) => {
  const createdUser = await userService.createUser(req.body)

  createdUser.error
    ? res.status(400).json({ error: createdUser.error })
    : res.status(201).json({ data: createdUser })
}

const updateUser = async (req, res) => {
  const updatedUser = await userService.updateUser(req.params.username, req.body)

  updatedUser.error
    ? res.status(400).json({ error: updatedUser.error })
    : res.status(201).json({ data: updatedUser })
}

const deleteUser = async (req, res) => {
  const deletedUser = await userService.deleteUser(req.params.username, req.body)

  deletedUser.error
    ? res.status(400).json({ error: deletedUser.error })
    : res.status(202).json({ data: deletedUser })
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
