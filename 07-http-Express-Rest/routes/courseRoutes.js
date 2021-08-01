import express from 'express';
import * as courseController from '../controllers/courseController.js';

const router = express.Router();
router.param('id', courseController.checkID);

router
  .route('/')
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);

router
  .route('/:id')
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

export default router;
