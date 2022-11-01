const Customer = require('../models/customer')


exports.createAccount = (req, res) => {

    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.loginCustomer = async(req, res) => {
    try {
        const { email, password } = req.body

        const user = await Customer.find({ email })
        if (!user) return res.status(400).json({ message: "Email entered does not exist" })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "Wrong password" })

        const token = await jwt.sign({ userId: user.id, isAdmin: false }, process.env.JWT_SECRET_KEY, {
            expiresIn: '24h'
        })

        return res.status(200).json({ message: "Logged in successfully", admin, token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.carRequest = (req, res) => {
    try {
        const { carID } = req.params
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.searchCustomers = async (req, res) => {
    try {
        const { query } = req.params
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}


exports.allCustomers = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.deleteCustomer = async (req, res) => {
    try {
        const { customerId } = req.body
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.updateCustomer = async (req, res) => {
    try {
        const { customerId } = req.params
        const { name, email, address, telephone } = req.body


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}