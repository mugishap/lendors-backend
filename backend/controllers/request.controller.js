const Customer = require('./../models/customer')
const Car = require('./../models/car')
const Request = require('./../models/request')
const { mailTo } = require('../utils/email')
const { v4 } = require('uuid')


exports.newRequest = async (req, res) => {
    try {
        const customerId = req.user.userId
        console.log(customerId);
        const id = `${v4()}-${Math.floor(Math.random() * 9999)}`
        const { carId, startDate, endDate } = req.body
        const car = await Car().findOne({ where: { id: carId } })
        if (!car) return res.status(400).json({ message: "Car does not exist" })
        if (car.isBooked) return res.status(400).json({ message: "Car is already booked" })
        const request = await Request().create({
            carId, id, startDate, endDate,
            customerId
        })
        console.log(car);
        await car.update({ ...car, isBooked: true })
        return res.status(200).json({ message: "Request created successfully", request })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.grantRequest = async (req, res) => {
    try {
        const { requestId } = req.params
        const request = await Request().findOne({ where: { id: requestId } })
        if (!request) return res.status(400).json({ message: "Request not found" })
        const car = await Car().findOne({ where: { id: request.carId } })
        console.log(car);
        const customer = await Customer().findOne({ where: { id: request.customerId } })
        if (!customer) return res.status(400).json({ messsage: "Customer does not exist" })
        console.log(customer);
        await request.update({ status: 'granted' })
        await mailTo(customer.email, `Your car request for ${car.name} has been granted successfully.`, '<a>Click here to view request</a>', 'Car Request Grant ')

        return res.status(200).json({ message: "Request granted successfully", car, request })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}
exports.denyRequest = async (req, res) => {
    try {
        const { requestId } = req.params
        const request = await Request().findOne({ where: { id: requestId } })
        if (!request) return res.status(400).json({ message: "Request not found" })
        const car = await Car().findOne({ where: { id: request.carId } })

        await car.update({ isBooked: false })
        await request.update({ status: 'denied' })
        return res.status(200).json({ message: "Request denied successfully", car, request })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}