import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from the server 💥');
});


const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
