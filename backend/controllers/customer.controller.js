const Customer = require('../models/customer')
const Car = require('../models/car')
const { mailTo } = require('../utils/email')
const dateFns = require('date-fns')

exports.createAccount = (req, res) => {

    try {
        const { name, email, address, telephone, password } = req.body
        const customer = Customer.create({ name, email, address, telephone, password })
        return res.status(200).json({ message: "Account created successfully", customer })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.getCustomer = async (req, res) => {

    try {
        const { userId } = req.user
        const user = await Customer.find({ where: { id: userId } })
        if (!user) return res.status(500).json({ message: "Error getting user data" })
        return res.status(200).json({ message: "Getting usser successfull", user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}

exports.loginCustomer = async (req, res) => {
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

exports.carRequest = async (req, res) => {
    try {
        const { carID } = req.params
        const { customerID } = req.user
        const { startDate, endDate } = req.body

        const user = await Customer.find({ where: { id: customerID } })

        const car = await Car.find({ where: { id: carID } })
        if (!car) return res.status(400).json({ message: "Car not found" })

        const request = Request.create({
            startDate,
            endDate,
            customerID,
            carID
        })

        if (!request) return res.status(500).json({ message: "Unable to create car request" })


        await mailTo(user.email,
            "Hello there",
            `<b>Car ${car.name} is being requested by ${user.names}(you)</b>.\n 
            <p>You needs to use it from <strong>${dateFns.format(startDate, 'MMM do YYYY')} until ${endDate, 'MMM do YYYY'}.</strong>\n</p>
            <br><br>
            `,
            `Car Request by ${user.names} via drive`
        )
        return res.status(200).json({ message: "Car request submitted successfully", car })
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