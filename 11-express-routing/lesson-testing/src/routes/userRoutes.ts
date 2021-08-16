import express from 'express';
import { readFile } from '../controller/readFileController';
import {writeFile} from '../controller/writeFileController';
import * as userController from '../controller/usersController';

const router = express.Router();
router.get('/read-file', readFile);
router.get('/write-file', writeFile);

router.route('/').get(userController.getAllUsers).post();

router.route('/:id').get().patch().delete();

export default router;