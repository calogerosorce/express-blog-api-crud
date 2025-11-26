const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts_rout')

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Example app listening on PORT http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

app.use('/posts', postsRouter)