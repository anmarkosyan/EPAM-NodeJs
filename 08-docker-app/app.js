import express from 'express';

const app = express();
app.get('/api/v1', (req, res)=> {
  res.send('Hello from the server💥🎉 Now we can run our docker container)))');
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
