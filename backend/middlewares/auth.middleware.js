
const jwt = require('jsonwebtoken')

exports.checkLoggedIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) return res.status(401).json({ message: "You are not logged in" })
        const response = await jwt.verify(token, import.meta.envJWT_SECRET_KEY, {})
        console.log(response)
        if (!response) return res.status(401).json({ message: "You are not logged in" })
        req.user = response
        next()
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error 500." })
    }
}

exports.checkAdminRole = async () => {
    try {
        const token = req.headers.authorization
        if (!token) return res.status(401).json({ message: "You are not an admin in" })
        const response = await jwt.verify(token, import.meta.envJWT_SECRET_KEY, {})
        console.log(response)
        if (response.role !== 'admin') return res.status(401).json({ message: "You are not an admin" })
        req.user = response
        next()
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error 500." })
    }
}