import * as express from 'express';
import * as emailControllers from '../controller/emailsController';
import { checkBody } from '../services/emails';

const router = express.Router();
router.patch('/sendEmail', checkBody, emailControllers.sendEmailController);

export default router;
