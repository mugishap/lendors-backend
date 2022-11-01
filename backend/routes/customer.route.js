const express = require('express')
const { createAccount, loginCustomer, deleteCustomer, updateCustomer, getCustomer } = require('../controllers/customer.controller')
const { checkLoggedIn } = require('./../middlewares/auth.middleware')
const customerRouter = express.Router()


customerRouter.post('/new', createAccount)
customerRouter.post('/login', loginCustomer)
customerRouter.delete('/delete', [checkLoggedIn], deleteCustomer)
customerRouter.patch('/update', [checkLoggedIn], updateCustomer)
customerRouter.get('/details', [checkLoggedIn], getCustomer)


module.exports = customerRouter