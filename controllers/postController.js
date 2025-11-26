const posts = require('../posts/posts')
const { tag } = require('../helper/help')

const index = (req, res) => {
    let postFilter = posts
    /*  const tag = req.query.tag.charAt(0).toUpperCase() + req.query.tag.slice(1); */
    const currentTag = tag(req, res);

    if (currentTag) {
        postFilter = posts.filter(item => item.tags.includes(currentTag))
    }
    res.json(postFilter)
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