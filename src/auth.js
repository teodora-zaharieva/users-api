const jwt = require('jsonwebtoken')
const sha512 = require('js-sha512')
const userRepository = require('./user/repository')
const utils = require('./utils')

const secretKey = 'secret'
const options = { algorithm: 'HS512' }
const session = {}

const clearSession = (req, res, next) => {
  const authToken = req.headers.authorization.replace('Bearer ', '')

  if (authToken) {
    const user = jwt.decode(authToken, secretKey, options)
    session[user.username] = []
  }

  next()
}

const authGuard = (req, res, next) => {
  try {
    const authToken = req.headers.authorization.replace('Bearer ', '')

    const user = jwt.verify(authToken, secretKey, options)
    const { username } = req.params

    if (!session[user.username].includes(authToken)) {
      res.status(401).json({ error: 'Unauthorized' })
    } else if (username && username !== user.username) {
      res.status(403).json({ error: 'Forbidden' })
    } else {
      next()
    }
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' })
  }
}

const validateCredentials = async (username, password) => {
  const foundUser = await userRepository.getUser(username)

  if (!foundUser || foundUser.password !== sha512(password)) {
    return { error: 'Invalid credentials!' }
  }

  return foundUser
}

const signIn = async (req, res) => {
  const { username, password } = req.body

  const foundUser = await validateCredentials(username, password)

  if (foundUser.error) {
    res.status(401).json({ error: foundUser.error })
  } else {
    const payload = utils.omitProps(foundUser, 'password')

    const authToken = jwt.sign(payload, secretKey, options)

    if (!session[username]) {
      session[username] = []
    }

    session[username].push(authToken)

    res.status(200).json({ authToken })
  }
}

module.exports = {
  signIn,
  authGuard,
  clearSession
}
