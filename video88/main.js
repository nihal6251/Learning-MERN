const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello  ihal World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/blog/:slug',(req, res)=>{
    //logic to fetch {slug} from db
    console.log(req.params)
    console.log(req.query)
    res.send(`hello ${req.params.slug}`)
})