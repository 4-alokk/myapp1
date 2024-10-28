const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
};

const app = express();
const port = 3009;

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('root');
});

// Existing `/user` route
app.get('/user', (req, res) => {
  let id = 10;
  let message = "Hello World";
  res.json({ message, id });
});

// Non-existent route to simulate an error
app.get('/nonexistent', (req, res) => {
  res.status(404).json({ error: "This route does not exist." });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
