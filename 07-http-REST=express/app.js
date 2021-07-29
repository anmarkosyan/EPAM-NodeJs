import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();
const __dirname = path.resolve();

const courses = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/courses.json`, 'utf-8'));
//1️⃣ HTTP get method
app.get('/api/v1/courses', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: {
       courses,
    },
  });
});

//2️⃣ HTTP post method
app.post('/api/v1/courses', (req, res)=>{

})


//creating server
const port = 8000;
app.listen(port, () => {
  console.log(`Listening a server on ${port} port...`);
});
