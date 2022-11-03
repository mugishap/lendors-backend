const express = require('express')
const { registerDefinition } = require('swaggiffy')
const { denyRequest, grantRequest } = require('../controllers/admin.controller')
const { createAccount, loginrequest, deleterequest, updaterequest, getrequest, newRequest } = require('../controllers/request.controller')
const { checkLoggedIn, checkAdminRole } = require('./../middlewares/auth.middleware')
const requestRouter = express.Router()

requestRouter.get('/grant/:requestID', [checkLoggedIn, checkAdminRole], grantRequest)
requestRouter.get('/deny/:requestID', [checkLoggedIn, checkAdminRole], denyRequest)
requestRouter.post('/new', [checkLoggedIn], newRequest)

registerDefinition(requestRouter, { tags: 'requests', mappedSchema: 'Request', basePath: '/request' });

module.exports = requestRouter