import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/courses.json`, 'utf-8')
);

//param middleware function
export const checkID = (req, res, next, val) => {
  if (req.params.id * 1 > courses.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID',
    });
  }
  next();
};
export const getAllCourses = (req, res) => {
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

export const getCourse = (req, res) => {
  //console.log(req.params);
  const id = Number(req.params.id); // req.params.id * 1;
  const course = courses.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      course,
    },
  });
};

export const createCourse = (req, res) => {
  //console.log(req.body);
  const newId = courses[courses.length - 1].id + 1;
  const newCourse = Object.assign({ id: newId }, req.body);
  courses.push(newCourse);

  fs.writeFile(
    `${__dirname}/dev-data/data/courses.json`,
    JSON.stringify(courses),
    err => {
      if (err) throw err;
      res.status(201).json({
        status: 'success',
        data: {
          courses: newCourse,
        },
      });
    }
  );
};

export const updateCourse = (req, res) => {
  //console.log(req.params, req.body);
  const id = Number(req.params.id);
  const course = courses.find(el => el.id === id);
  const updateCourse = Object.assign(course, req.body);

  courses.forEach(el => {
    if (el.id === updateCourse.id) {
      return updateCourse;
    }
  });

  fs.writeFile(
    `${__dirname}/dev-data/data/courses.json`,
    JSON.stringify(courses),
    err => {
      if (err) throw err;
      res.status(201).json({
        status: 'success',
        data: {
          updateCourse,
        },
      });
    }
  );
};

export const deleteCourse = (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find(el => el.id === id);
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  fs.writeFile(
    `${__dirname}/dev-data/data/courses.json`,
    JSON.stringify(courses),
    err => {
      if (err) throw err;
      res.status(204).json({
        status: 'success',
        data: null,
      });
    }
  );
};
