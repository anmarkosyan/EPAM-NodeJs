import * as express from 'express';
import * as emailControllers from '../controller/emailsController';

const router = express.Router();
router.patch(
  '/sendEmail',
  emailControllers.checkBody,
  emailControllers.sendEmailController
);

export default router;
