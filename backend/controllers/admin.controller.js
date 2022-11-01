const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Customer = require('./../models/customer')
const Car = require('./../models/car')
const Request = require('./../models/request')
const { mailTo } = require('../utils/email')

dotenv.config()

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})


exports.createAdmin = async (req, res) => {
    try {
        const { names, address, email, telephone, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8);
        const admin = Admin.create({
            names,
            address,
            email, telephone,
            password: hashedPassword
        })
        console.log("New Admin being added")
        return res.status(201).json({ message: "Admin created successfully", admin })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}

exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        const admin = await Admin.find({ email })
        if (!admin) return res.status(400).json({ message: "Email entered does not exist" })
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) return res.status(400).json({ message: "Wrong password" })

        const token = await jwt.sign({ adminId: admin.id, isAdmin: true }, process.env.JWT_SECRET_KEY, {
            expiresIn: '24h'
        })

        return res.status(200).json({ message: "Logged in successfully", admin, token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}

exports.deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params
        const admin = await Admin.findByPk(id)
        if (!admin) return res.status(404).json({ message: "Admin not found" })
        await admin.destroy()
        return res.status(200).json({ message: "Admin deleted successfully", admin })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.updateAdmin = async (req, res) => {
    try {
        const { id } = req.params
        const admin = await Admin.findByPk(id)
        if (!admin) return res.status(404).json({ message: "Admin not found" })
        const { names, address, email, telephone } = req.body
        await admin.update({ names, address, email, telephone })
        return res.status(200).json({ message: "Admin updated successfully", admin })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.getAdminDetails = async (req, res) => {
    try {
        const { id } = req.params
        const admin = await Admin.findByPk(id)
        if (!admin) return res.status(404).json({ message: "Admin not found" })
        return res.status(200).json({ message: "Admin details", admin })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.grantRequest = async (req, res) => {
    try {
        const { requestID } = req.params
        const request = await Request.find({ where: { id: requestID } })
        if (!request) return res.status(400).json({ message: "Request not found" })
        const car = await Car.find({ where: { id: request.carId } })

        await car.update({ isBooked: true })
        await request.update({ isAllowed: true })

        const customer = await Customer.find({ where: { id: req.userId } })
if(!customer) return res.status(400).json({messsage:"Customer does not exist"})
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