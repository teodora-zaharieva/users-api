const userRouter = require('express').Router()
const userController = require('./controller')

userRouter.get('/:username', userController.getUser)
userRouter.post('/', userController.createUser)
userRouter.put('/:username', userController.updateUser)

module.exports = userRouter
