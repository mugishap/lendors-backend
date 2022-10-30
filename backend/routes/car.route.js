const express = require('express')

const carRouter = express.Router()


carRouter.post('/new',)
carRouter.delete('/delete/:carId',)
carRouter.patch('/udpate/:carId',)
carRouter.get('/details/:carId',)
carRouter.get('/all',)


module.exports = carRouter