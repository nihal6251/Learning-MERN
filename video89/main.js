const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"))
app.use('/blog',blog)

app.get('/', (req, res) => {
  res.send('Hello  World!')
})
app.post('/', (req, res) => {
  res.send('Hello  post!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get("/index", (req,res)=>{
    console.log("hey its index")
    res.sendFile('template/index.html', {root: __dirname})
})


app.get("/json", (req,res)=>{
    // console.log("hey its index")
    res.json( {a:1, c: 5, what: 34 })
})