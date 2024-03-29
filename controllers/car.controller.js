const Car = require('./../models/car')
const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
const { v4 } = require('uuid')
dotenv.config()
const { createCarSchemaValidation } = require('./../validations/schema.validations')

exports.getCars = async (req, res) => {
    try {
        const cars = await Car().findAll()
        if (!cars) return res.status(404).json({ message: "No cars found" })
        return res.status(200).json({ message: "Cars fetched successfully", cars: cars.splice(0, 30) })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.newCar = async (req, res) => {
    try {
        const { name, price, brand, description, currency, imageUrl } = req.body
        const { error, value } = createCarSchemaValidation.validate({ name, price, brand, description, currency, imageUrl, description })
        if (error) return res.status(400).json({ message: "Bad request", error: error.message })
        const added = Date.now()
        const id = `${v4()}-${Math.floor(Math.random() * 9999)}`
        const car = await Car().create({ name, brand, description, price, id, imageUrl, added, currency, description })
        if (!car) return res.status(400).json({ message: "Car not created" })
        return res.status(201).json({ message: "Car created successfully", car })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.updateCar = async (req, res) => {
    try {
        const { name, price,brand, currency,imageUrl, description } = req.body
        const { error, value } = createCarSchemaValidation.validate({ name, price, brand, description, currency, imageUrl, description })
        if (error) return res.status(400).json({ message: "Bad request", error: error.message })
        const { carId } = req.params
        const car = await Car().findByPk(carId)
        if (!car) return res.status(404).json({ message: "Car not found" })
        await car.update({ name, price,imageUrl, currency,brand, description })
        return res.status(200).json({ message: "Car updated successfully", car })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}


exports.deleteCar = async (req, res) => {
    try {
        const { carId } = req.params
        const car = await Car().findByPk(carId)
        if (!car) return res.status(404).json({ message: "Car not found" })
        await car.destroy()
        return res.status(200).json({ message: "Car deleted successfully", car })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}

exports.getCarById = async (req, res) => {
    try {
        const { carId } = req.params
        const car = await Car().findByPk(carId)
        if (!car) return res.status(404).json({ message: "Car not found" })
        return res.status(200).json({ message: "Car fetched successfully", car })
        // const car = await Car().findAll({ where: { id: carId } })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.getCarByQuery = async (req, res) => {
    try {
        const { Op } = require('sequelize')
        const { query } = req.params
        const car = await Car().findAll({ where: { [Op.or]: [{ name: { [Op.like]: `%${query}%` } }, { brand: { [Op.like]: `%${query}%` } }] } })
        if (!car) return res.status(404).json({ message: "Car not found" })
        return res.status(200).json({ message: "Car fetched successfully", query, car })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}