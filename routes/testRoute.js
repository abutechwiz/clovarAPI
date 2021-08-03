
const express = require('express')
const router = express.Router()

const test = require("../models/testModel")

router.get('/', async(req, res) => {
    try {
        const values = await test.find()
        res.json(values)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const value = await test.findById(req.params.id)
        res.json(value)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req, res) => {
    const values = new test({
        name: req.body.name,
        price:req.body.price,
        book: req.body.book,
        description: req.body.description
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
        const value = await test.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})


router.delete('/:id', async(req, res) => {
    try {
        const value = await test.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})




module.exports = router;