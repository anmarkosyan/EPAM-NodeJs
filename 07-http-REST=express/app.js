import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();
const __dirname = path.resolve();
const courses = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/courses.json`, 'utf-8'));

//middlewares
app.use(express.json());

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
app.post('/api/v1/courses', (req, res) => {
  //console.log(req.body);
  const newId = courses[courses.length - 1].id + 1;
  const newCourse = Object.assign({ id: newId }, req.body);

  courses.push(newCourse);
  console.log(courses);

  fs.writeFile(`${__dirname}/dev-data/data/courses.json`, JSON.stringify(courses), err => {
    if (err) throw err;
    res.status(201).json({
      status: 'success',
      data: {
        courses: newCourse,
      },
    });
  });
});

//creating server
const port = 8000;
app.listen(port, () => {
  console.log(`Listening a server on ${port} port...`);
});
