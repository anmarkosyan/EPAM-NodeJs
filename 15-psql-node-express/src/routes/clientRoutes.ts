import { Router } from 'express';
import { ClientController } from '../controller/client.controller';

const router = Router();


router
  .route('/')
  .get(ClientController.getAllClients)
  .post(ClientController.createClient);

router
  .route('/:id')
  .get(ClientController.getClient)
  .patch(ClientController.updateClient)
  .delete(ClientController.deleteClient);

export { router as clientRoute };
