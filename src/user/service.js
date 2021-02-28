const userRepository = require('./repository')

const getUser = (username) => {
  return userRepository.getUser(username)
}

const createUser = (username, userData) => {
  return userRepository.createUser(username, userData)
}

const updateUser = (username, userData) => {
  return userRepository.updateUser(username, userData)
}

module.exports = {
  getUser,
  createUser,
  updateUser
}
