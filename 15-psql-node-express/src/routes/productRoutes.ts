import { Router } from 'express';
import { ProductController } from '../controller/product.controller';

const router = Router();

router
  .route('/')
  .get(ProductController.getAllProducts)
  .post(ProductController.createProduct);//req. permission

router
  .route('/:id')
  .get(ProductController.getProduct)
  .patch(ProductController.updateProduct) //req. permission
  .delete(ProductController.deleteProduct);//req. permission

export { router as productRoute};
