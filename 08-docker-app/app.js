import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello from the server 💥🎉 Now we can run our docker container)))</h1>');
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
