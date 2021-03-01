const sha512 = require('js-sha512')
const userRepository = require('./repository')
const utils = require('../utils')

const getUser = async (username) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser) {
    return {
      error: `User with username "${username}" does not exists!`
    }
  }

  return utils.omitProps(foundUser, 'password')
}

const createUser = async (userData) => {
  const foundUser = await userRepository.getUser(userData.username)

  if (foundUser) {
    return { error: `Username "${userData.username}" is already taken!` }
  }

  const createdUser = await userRepository.createUser({
    ...utils.pickProps(
      userData,
      'username',
      'firstName',
      'lastName',
      'address',
      'country',
      'email',
      'phone'
    ),
    password: sha512(userData.password)
  })

  return utils.omitProps(createdUser, 'password')
}

const updateUser = async (username, userData) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser) {
    return {
      error: `User with username "${username}" does not exists!`
    }
  } else if (!userData.password || sha512(userData.password) !== foundUser.password) {
    return {
      error: 'Invalid credentials!'
    }
  }

  const updatedUser = {
    ...foundUser,
    ...utils.pickProps(userData, 'firstName', 'lastName', 'address', 'country', 'email', 'phone')
  }

  await userRepository.updateUser(username, updatedUser)

  return utils.omitProps(updatedUser, 'password')
}

const deleteUser = async (username, password) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser) {
    return {
      error: `User with username "${username}" does not exists!`
    }
  } else if (!password || sha512(password) !== foundUser.password) {
    return {
      error: 'Invalid credentials!'
    }
  }

  await userRepository.deleteUser(username)

  return utils.omitProps(foundUser, 'password')
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
