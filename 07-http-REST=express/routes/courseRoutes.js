import express from 'express';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const courses = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/courses.json`, 'utf-8'));

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

//ROUTES
const router = express.Router();
router.route('/').get(getAllCourses).post(createCourse);
router.route('/:id').get(getCourse).patch(updateCourse).delete(deleteCourse);

export default router;
