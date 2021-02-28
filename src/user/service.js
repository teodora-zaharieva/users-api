const userRepository = require('./repository')

const createUser = (username, userData) => {
  return userRepository.createUser(username, userData)
}

module.exports = {
  createUser
}
