const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

dotenv.config()


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
        user: import.meta.envEMAIL_USER,
        pass: import.meta.envEMAIL_PASSWORD
    }
})


exports.mailTo = async (email, text, html, subject) => {

    try {
        const info = await transporter.sendMail({
            from: import.meta.envEMAIL_USER,
            to: email,
            subject,
            text,
            html
        })
        console.log(info.messageId);
        console.log("Testing email functionality");
        return { message: "Email sent successfully", emailID: info.messageId, status: true }
    } catch (error) {
        console.log(error)
        return { message: "Unable to send email", status: false }
    }



}