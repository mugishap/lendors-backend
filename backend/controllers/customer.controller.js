

exports.createAccount = (req, res) => {

    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.loginCustomer = (req, res) => {
    try {

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