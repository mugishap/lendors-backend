const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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


