const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({greeting: 'Hello World!'})
})

app.get('/hello', (req, res) => {
  res.sendStatus(204)
})

app.get('/sum', (req, res) => {
var numbers = req.query.numbers.split(",")
  console.log(numbers);

  var sum = 0

  for (let index = 0; index < numbers.length; index++) {
    var n = Number(numbers[index]);
    sum = sum + n 
    
  }
  
  res.send(JSON.stringify(sum))
})

app.get('/reverse-words', (req, res) => {
  var sentence = req.query.sentence.split(" ")
  var reversedSentence = ''

  for (let index = 0; index < sentence.length; index++) {
    var word = sentence[index];
    var reveredWord = word.split('').reverse().join('')
    reversedSentence = reversedSentence + reveredWord + " "
  }

  res.send(''+reversedSentence)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})