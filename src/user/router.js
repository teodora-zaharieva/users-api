const userRouter = require('express').Router()
const userController = require('./controller')

userRouter.post('/', userController.createUser)

module.exports = userRouter
