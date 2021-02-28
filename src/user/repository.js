let userDatastore = {}

const getUser = (username) => {
  const foundUser = userDatastore[username]

  if (!foundUser) {
    throw new Error(`User with username: "${username}" does not exist!`)
  }

  return foundUser
}

const createUser = (username, userData) => {
  if (userDatastore[username]) {
    throw new Error(`Username: "${username}" is already taken!`)
  }

  userDatastore[username] = { username, ...userData }

  return userDatastore[username]
}

const updateUser = (username, userData) => {
  const userToUpdate = userDatastore[username]

  if (!userToUpdate) {
    throw new Error(`User with username: "${username}" does not exist!`)
  }

  userDatastore[username] = { ...userToUpdate, ...userData }

  return userDatastore[username]
}

module.exports = {
  getUser,
  createUser,
  updateUser
}
