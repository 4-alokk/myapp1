const express = require('express')
const cors = require('cors');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const app = express()
const port = 3000

app.use(cors(corsOptions));

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