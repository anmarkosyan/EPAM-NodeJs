import { Router } from 'express';
import { ClientController } from '../controller/client.controller';
const router = Router();

router.post('/add', ClientController.createClient);

export default router;
