import * as express from 'express';
import * as emailControllers from '../controller/emailsController';

const router = express.Router();
router.patch(
  '/sendEmail',
  emailControllers.checkBody,
  emailControllers.sendEmailController
);

router
  .route('/')
  .get(emailControllers.getAllEmails)
  .post(emailControllers.createEmail);

router
  .route('/:id')
  .get(emailControllers.getEmail)
  .patch(emailControllers.updateEmail)
  .delete(emailControllers.deleteEmail);

export default router;
