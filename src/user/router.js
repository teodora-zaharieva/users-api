const userRouter = require('express').Router()
const { authGuard, clearSession } = require('../auth')
const validator = require('../validator')
const userController = require('./controller')

userRouter.get('/:username', authGuard, userController.getUser)
userRouter.post('/', validator.createUser, userController.createUser)
userRouter.put('/:username', authGuard, clearSession, userController.updateUser)
userRouter.delete('/:username', authGuard, clearSession, userController.deleteUser)

module.exports = userRouter
