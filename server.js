const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/clovarDB';
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

const userRouting = require('./routes/userRoute')

const orderRouting = require('./routes/orderRoute')

const testRouting = require("./routes/testRoute")



app.use('/orders',orderRouting);
app.use('/users', userRouting);
app.use("/tests", testRouting)


app.listen(PORT, () => {
    console.log('Server Started')
})