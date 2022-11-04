const express = require('express')
const { checkLoggedIn, checkAdminRole } = require('./../middlewares/auth.middleware')
const adminRouter = express.Router()

const { createAdmin, loginAdmin, deleteAdmin, updateAdmin, getAdminDetails } = require('./../controllers/admin.controller')
const { registerDefinition } = require('swaggiffy')

adminRouter.post('/new',  createAdmin)
adminRouter.post('/login', loginAdmin)
adminRouter.delete('/delete/:id', [checkLoggedIn, checkAdminRole], deleteAdmin)
adminRouter.patch('/udpate/:id', [checkLoggedIn, checkAdminRole], updateAdmin)
adminRouter.get('/details/:id', [checkLoggedIn, checkAdminRole], getAdminDetails)

registerDefinition(adminRouter, { tags: 'Admins', mappedSchema: 'Admin', basePath: '/admin' });

module.exports = adminRouter