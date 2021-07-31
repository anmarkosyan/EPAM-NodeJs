import fs from 'fs';
import path from 'path';
import express from 'express';
import morgan from 'morgan';

const app = express();
const __dirname = path.resolve();
const courses = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/courses.json`, 'utf-8'));

//1️⃣ MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//2️⃣ ROUTE HANDLERS
const getAllCourses = (req, res) => {
  //console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: courses.length,
    data: {
      courses,
    },
  });
};

const getCourse = (req, res) => {
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
};

const createCourse = (req, res) => {
  //console.log(req.body);
  const newId = courses[courses.length - 1].id + 1;
  const newCourse = Object.assign({ id: newId }, req.body);
  courses.push(newCourse);

  fs.writeFile(`${__dirname}/dev-data/data/courses.json`, JSON.stringify(courses), err => {
    if (err) throw err;
    res.status(201).json({
      status: 'success',
      data: {
        courses: newCourse,
      },
    });
  });
};

const updateCourse = (req, res) => {
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
};

const deleteCourse = (req, res) => {
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
};

//3️⃣ ROUTES
const courseRouter = express.Router();
const userRouter = express.Router();

app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRouter);

courseRouter.route('/').get(getAllCourses).post(createCourse);
courseRouter.route('/:id').get(getCourse).patch(updateCourse).delete(deleteCourse);

// userRouter.route('/').get(getAllUsers).post(createUser);
// userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

//4️⃣ START SERVER
const port = 8000;
app.listen(port, () => {
  console.log(`Listening a server on ${port} port...`);
});
