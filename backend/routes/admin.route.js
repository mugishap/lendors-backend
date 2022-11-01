const express = require('express')
const { checkLoggedIn, checkAdminRole } = require('./../middlewares/auth.middleware')
const adminRouter = express.Router()

const { createAdmin, loginAdmin, deleteAdmin, updateAdmin, getAdminDetails, grantRequest } = require('./../controllers/admin.controller')


adminRouter.post('/new', [checkLoggedIn, checkAdminRole], createAdmin)
adminRouter.post('/login', loginAdmin)
adminRouter.delete('/delete/:id', [checkLoggedIn, checkAdminRole], deleteAdmin)
adminRouter.patch('/udpate/:id', [checkLoggedIn, checkAdminRole], updateAdmin)
adminRouter.get('/details/:id', [checkLoggedIn, checkAdminRole], getAdminDetails)
adminRouter.get('/request/grant/:requestID',[checkLoggedIn,checkAdminRole],grantRequest )
adminRouter.get('/request/deny/:requestID',[checkLoggedIn,checkAdminRole],)


module.exports = adminRouter