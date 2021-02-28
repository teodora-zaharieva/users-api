const userRepository = require('./repository')

const getUser = (username) => {
  return userRepository.getUser(username)
}

const createUser = (username, userData) => {
  return userRepository.createUser(username, userData)
}

module.exports = {
  getUser,
  createUser
}
