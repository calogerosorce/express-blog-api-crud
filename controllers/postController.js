const posts = require('../posts/posts')

const index = (req, res) => {
    res.json(posts)
}

const show = (req, res) => {
    const postFilter = posts.find(item => item.id === Number(req.params.id))
    if (!postFilter) {
        return res.status(404).json({
            error: true,
            message: "Not found!"
        })
    }
    res.json(postFilter)
}

const store = (req, res) => {
    res.send('Store a new post here')
}

const update = (req, res) => {
    res.send(`Update post whith ${req.params.id}`)
}

const modify = (req, res) => {
    res.send(`Modify the post whith ${req.params.id}`)
}

const destroy = (req, res) => {
    const postFilter = posts.find(item => item.id === Number(req.params.id))
    if (!postFilter) {
        return res.status(404).json({
            error: true,
            message: "Not found!"
        })
    }

    posts.splice(posts.indexOf(postFilter), 1)

    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}