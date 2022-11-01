const express = require('express')
const { newCar, getCars, deleteCar, getCarById, getCarByQuery, updateCar, } = require('../controllers/car.controller')
const { checkLoggedIn, checkAdminRole } = require('./../middlewares/auth.middleware')


const carRouter = express.Router()


carRouter.post('/new', [checkLoggedIn, checkAdminRole], newCar)
carRouter.delete('/delete/:carId', [checkLoggedIn, checkAdminRole], deleteCar)
carRouter.patch('/update/:carId', [checkLoggedIn, checkAdminRole], updateCar)
carRouter.get('/details/:carId', [checkLoggedIn, checkAdminRole], getCarById)
carRouter.get('/all', getCars)
carRouter.get('/search/:query', getCarByQuery)


module.exports = carRouter