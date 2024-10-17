const express = require('express')
const app = express()

const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

app.get('/', (req,res) => {
    res.send('Homepage')
})

app.listen(3000, ()=>{
    console.log('Your server is up and running...')
})

