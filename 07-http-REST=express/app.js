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
//2️⃣ get one course
app.get('/api/v1/courses/:id', (req, res) => {
  //console.log(req.params);
  const id = Number(req.params.id); // req.params.id * 1;
  const course = courses.find(el => el.id === id);

  if (!course) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        course,
      },
    });
  }
});

//3️⃣ HTTP post method
app.post('/api/v1/courses', (req, res) => {
  //console.log(req.body);
  const newId = courses[courses.length - 1].id + 1;
  const newCourse = Object.assign({ id: newId }, req.body);

  courses.push(newCourse);
  //console.log(courses);

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

//4️⃣ HTTP patch method
app.patch('/api/v1/courses/:id', (req, res) => {
  //console.log(req.params, req.body);
  const id = Number(req.params.id);
  const course = courses.find(el => el.id === id);

  if (!course) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  } else {
    const updateCourse = Object.assign(course, req.body);
    //console.log(updateCourse);

    for (let el of courses) {
      if (el.id === updateCourse.id) {
        el = updateCourse;
      }
    }

    fs.writeFile(`${__dirname}/dev-data/data/courses.json`, JSON.stringify(courses), err => {
      if (err) throw err;
      res.status(201).json({
        status: 'success',
        data: {
          updateCourse,
        },
      });
    });
  }
});

//5️⃣ HTTP delete method
app.delete('/api/v1/courses/:id', (req, res) => {
  const id = Number(req.params.id);
  let course = courses.find(el => el.id === id);

  if (!course) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  } else {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //console.log(courses);

    fs.writeFile(`${__dirname}/dev-data/data/courses.json`, JSON.stringify(courses), err => {
      if (err) throw err;
      res.status(204).json({
        status: 'success',
        data: null,
      });
    });
  }
});

//creating server
const port = 8000;
app.listen(port, () => {
  console.log(`Listening a server on ${port} port...`);
});
