const { create } = require('domain')
const Datastore = require('nedb')
const path = require('path')

const db = new Datastore({
  filename: path.resolve(__dirname, 'datastore.db'),
  autoload: true
})

const getUser = async (username) => {
  try {
    const foundUser = await new Promise((resolve, reject) => {
      db.findOne({ username }, (error, data) => {
        error ? reject(error) : resolve(data)
      })
    })

    return foundUser
  } catch (error) {
    return error
  }
}

const createUser = async (userData) => {
  try {
    const createdUser = await new Promise((resolve, reject) => {
      db.insert(userData, (error, data) => {
        error ? reject(error) : resolve(data)
      })
    })

    return createdUser
  } catch (error) {
    return error
  }
}

const updateUser = async (username, userData) => {
  try {
    const updatedUser = await new Promise((resolve, reject) => {
      db.update({ username }, userData, {}, (error, data) => {
        error ? reject(error) : resolve(data)
      })
    })

    return updatedUser
  } catch (error) {
    return error
  }
}

const deleteUser = async (username) => {
  try {
    const deletedUser = await new Promise((resolve, reject) => {
      db.remove({ username }, (error, data) => {
        error ? reject(error) : resolve(data)
      })
    })

    return deletedUser
  } catch (error) {
    return error
  }
}

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
}
