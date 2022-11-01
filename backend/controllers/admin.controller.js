const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
dotenv.config()

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})


exports.createAdmin = async (req, res) => {
    try {
        const { names, address, email, telephone, password } = req.body

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}

exports.loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}


