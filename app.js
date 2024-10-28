const express = require('express')
const app = express()
const port = 3000

// app.use('/user/:id', (req, res, next) => {
//   console.log("Request URL:", req.originalUrl)
//   next()
// })

// app.use('/user/:id', (req, res, next) => {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, (req, res, next) => {
//   console.log('I am the second middleware')
//   next()
// })

app.get('/', (req, res) => {
  res.send('root')
})

// create a simple get request sending a json object with a message and a id
app.get('/user', (req, res) => {
  let id = 10;
  let message = "Hello World";
  res.json({message, id});
  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})