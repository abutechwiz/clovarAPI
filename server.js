const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://clovarUser:8531967660@clovar.kzcmn.mongodb.net/clovarDb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

const app = express()

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const Router = require('./routes/userRoute')
app.use('/users', Router)

app.listen(PORT, () => {
    console.log('Server Started')
})