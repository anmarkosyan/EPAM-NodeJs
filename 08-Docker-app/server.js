import app from './app.js';

// START SERVER
const port = 8080;
app.listen(port, () => {
  console.log(`Listening a server on ${port} port...`);
});
