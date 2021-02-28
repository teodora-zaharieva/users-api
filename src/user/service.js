const userRepository = require('./repository')
const utils = require('../utils')

const getUser = async (username) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser) {
    return {
      error: `User with username "${username}" does not exists!`
    }
  }

  return utils.trimProps(foundUser, 'password')
}

const createUser = async (userData) => {
  const foundUser = await userRepository.getUser(userData.username)

  if (foundUser) {
    return { error: `Username "${userData.username}" is already taken!` }
  }

  const createdUser = await userRepository.createUser(userData)

  return utils.trimProps(createdUser, 'password')
}

const updateUser = async (username, userData) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser) {
    return {
      error: `User with username "${username}" does not exists!`
    }
  }

  const updatedUser = { ...foundUser, ...userData }

  await userRepository.updateUser(username, updatedUser)

  return utils.trimProps(updatedUser, 'password')
}

const deleteUser = async (username) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser) {
    return {
      error: `User with username "${username}" does not exists!`
    }
  }

  await userRepository.deleteUser(username)

  return utils.trimProps(foundUser, 'password')
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
