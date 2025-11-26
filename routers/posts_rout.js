const express = require('express')
const router = express.Router()
const posts = require('../posts/posts')

router.get('/', (req, res) => {
    res.json(posts)
})

router.get('/:id', (req, res) => {
    res.json(posts.find(item => item.id === Number(req.params.id)))
})

router.post('/', (req, res) => {
    res.send('Store a new post here')
})

router.put('/:id', (req, res) => {
    res.send(`Update post whith ${req.params.id}`)
})

router.patch('/:id', (req, res) => {
    res.send(`Modify the post whith ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete the post whith ${req.params.id}`)
})


module.exports = router

