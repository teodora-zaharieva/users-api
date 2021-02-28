let userDatastore = {}

const createUser = (username, userData) => {
  if (userDatastore[username]) {
    throw new Error(`Username: "${username}" is already taken!`)
  }

  userDatastore[username] = { username, ...userData }

  return userDatastore[username]
}

module.exports = {
  createUser
}
