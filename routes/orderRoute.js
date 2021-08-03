
const express = require('express')
const router = express.Router()

const user = require("../models/orderModel")

router.get('/', async(req, res) => {
    try {
        const values = await user.find()
        res.json(values)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const value = await user.findById(req.params.id)
        res.json(value)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const values = new user({
        name: req.body.name,
        tests: req.body.tests,
        user: req.body.user,
        status: req.body.status
    })

    try {
        const a1 = await values.save()
        res.json(a1)
    } catch (err) {
        res.send(err)
    }
})


router.patch('/:id', async(req, res) => {
    try {
        const value = await user.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})


router.delete('/:id', async(req, res) => {
    try {
        const value = await user.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})




module.exports = router;