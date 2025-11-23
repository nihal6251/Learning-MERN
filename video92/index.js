const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "My Awesome Site"
    let searchtext = "Search here"
    let arr =[5, 8, 9]
  res.render('index', {sitename : sitename, searchtext : searchtext, arr})
})


app.get('/blog/:slug', (req, res) => {
    let blogtitle = "What the fuck"
    let blogcontent = "This is the blog content."
  res.render('blogpost', {blogtitle : blogtitle, blogcontent : blogcontent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
