const Customer = require('./../models/customer')
const Car = require('./../models/car')
const Request = require('./../models/request')
const { mailTo } = require('../utils/email')


exports.newRequest = async (req, res) => {
    try {
        const customerId = req.userId
        const { carId, startDate, endDate } = req.body
        const request = Request().create({
            carId, startDate, endDate,
            customerId,
        })
        return res.status(200).json({ message: "Request created successfully", request })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.grantRequest = async (req, res) => {
    try {
        const { requestID } = req.params
        const request = await request.find({ where: { id: requestID } })
        if (!request) return res.status(400).json({ message: "Request not found" })
        const car = await Car.find({ where: { id: request.carId } })

        await car.update({ isBooked: true })
        await request.update({ isAllowed: true })

        const customer = await Customer.find({ where: { id: req.userId } })
        if (!customer) return res.status(400).json({ messsage: "Customer does not exist" })
        await mailTo(customer.email,)

        return res.status(200).json({ message: "Request granted successfully", car, request })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}
exports.denyRequest = async (req, res) => {
    try {
        const { requestID } = req.params
        const request = await Request.find({ where: { id: requestID } })
        if (!request) return res.status(400).json({ message: "Request not found" })
        const car = await Car.find({ where: { id: request.carId } })

        await car.update({ isBooked: true })
        await request.update({ isAllowed: true })
        return res.status(200).json({ message: "Request denied successfully", car, request })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}