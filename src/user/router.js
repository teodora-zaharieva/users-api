const userRouter = require('express').Router()
const userController = require('./controller')
const validator = require('../validator')

userRouter.get('/:username', userController.getUser)
userRouter.post('/', validator.createUser, userController.createUser)
userRouter.put('/:username', userController.updateUser)
userRouter.delete('/:username', userController.deleteUser)

module.exports = userRouter
