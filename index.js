const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({greeting: 'Hello World!'})
})

app.get('/hello', (req, res) => {
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})