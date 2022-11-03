const express = require('express')
const { registerDefinition } = require('swaggiffy')
const { createAccount, loginCustomer, deleteCustomer, updateCustomer, getCustomer } = require('../controllers/customer.controller')
const { checkLoggedIn } = require('./../middlewares/auth.middleware')
const customerRouter = express.Router()


customerRouter.post('/new', createAccount)
customerRouter.post('/login', loginCustomer)
customerRouter.delete('/delete', [checkLoggedIn], deleteCustomer)
customerRouter.patch('/update', [checkLoggedIn], updateCustomer)
customerRouter.get('/details', [checkLoggedIn], getCustomer)

registerDefinition(customerRouter, { tags: 'Customers', mappedSchema: 'Customer', basePath: '/customer' });

module.exports = customerRouter