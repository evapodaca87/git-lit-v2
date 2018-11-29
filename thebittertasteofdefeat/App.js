const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json('🍄')
})

app.get('/users', (req, res, next) =>{
  res.json('this will be the users')
})


app.listen(port, () => {console.log(`Up on port ${port}`)})