import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello from the server 💥\n Now we can run our docker container)))</h1>');
});


const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
