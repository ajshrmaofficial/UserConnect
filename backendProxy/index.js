const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')
const app = express()
const cors = require('cors')
const bodyParser = express.json()
app.use(bodyParser)

app.use(cors())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.AUTH_PASSWORD
    }
})

app.post('/api/sendMail', async(req, res) => {
    const userData = req.body
    if(!userData || !userData.username || !userData.mobile || !userData.email || !userData.message) res.send('Please fill all the fields')
    console.log(userData)
    const message = 'From: ' + userData.username + '\n' + 'Mobile: ' + userData.mobile + '\n' + 'Email: ' + userData.email + '\n' + userData.message

    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: 'Testing Mail Sending app by Ajay Sharma',
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response)
            res.send('Email sent')
        }
    })
    }
)

app.listen(process.env.PORT, () => {
    console.log(`App reverse proxy listening at http://localhost:${process.env.PORT}`)
    }
)