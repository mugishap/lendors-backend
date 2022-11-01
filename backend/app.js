const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const dotenv = require('dotenv')
const { connectToDB } = require('./utils/database')
const adminRouter = require('./routes/admin.route')
// const {Swaggify}=require('swaggiffy')

dotenv.config()

app.use(bodyParser.json({ limit: '5mb' }))

connectToDB()

app.use('/admin', adminRouter)
app.use('/car', adminRouter)
app.use('/customer', adminRouter)

app.listen(PORT, (err) => {
    if (err) console.log("Error running server")
    console.log(`Server UP on PORT ${PORT}`)
})

// new Swaggiffy().setupExpress(app).swaggiffy();