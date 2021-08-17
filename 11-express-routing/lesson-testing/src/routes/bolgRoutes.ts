import express from 'express';
import { readFile } from '../controller/readFileController';
import { writeFile } from '../controller/writeFileController';
import { controller } from '../controller/blogController';

const router = express.Router();
router.get('/read-file', readFile);
router.get('/write-file', writeFile);

router.route('/').get(controller.getAllBlogs).post(controller.createBlog);

router
  .route('/:id')
  .get(controller.getBlog)
  .patch(controller.updateBlog)
  .delete(controller.deleteBlog);

export default router;
