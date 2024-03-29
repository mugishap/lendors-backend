const express = require('express')
const { registerDefinition } = require('swaggiffy')
const { createAccount, loginUser, deleteUser, updateUser, getUser, allUsers } = require('../controllers/user.controller')
const { checkLoggedIn, checkAdminRole } = require('../middlewares/auth.middleware')
const userRouter = express.Router()


userRouter.post('/new', createAccount)
userRouter.post('/login', loginUser)
userRouter.delete('/delete', [checkLoggedIn], deleteUser)
userRouter.put('/update', [checkLoggedIn], updateUser)
userRouter.get('/details', [checkLoggedIn], getUser)
userRouter.get('/all', [checkLoggedIn, checkAdminRole], allUsers)

registerDefinition(userRouter, { tags: 'Users', mappedSchema: 'User', basePath: '/user' });

module.exports = userRouter