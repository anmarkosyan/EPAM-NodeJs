console.log('Hello typescript 🔮');
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from server ....');
});

const port = process.env.Port ?? 3000;
app.listen(port, ()=>{
  console.log(`Listening from port ${port}...  `)
})