

exports.getCars = async (req, res) => {
    try {

        // const cars = await
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

export const newCar = async (req, res) => {
    try {
        const { name, price, currency, description } = req.body

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

exports.updateCar = async (req, res) => {
    try {

        const { name, price, currency, description } = req.body
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

}


exports.deleteCar = async (req, res) => {
    try {

        const { carId } = req.params
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", error: error.message })
    }

} 