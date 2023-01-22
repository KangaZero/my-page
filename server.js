const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/message', (req, res) => {
    let {name, email, phone, message} = req.body;

    transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: `${process.env.MY_EMAIL}`,
        subject: 'Form Submission',
        text: `Name: ${name} Email: ${email} Phone: ${phone} Message: ${message}`
    }, (error, info) => {
        if (error) {
            return res.status(500).json({
                message: error.message
            });
        }

        res.json({
            message: 'Form submission successful!'
        });
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});