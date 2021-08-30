import { Request, Response } from 'express';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { UserRole } from '../entities/Product';


@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  //1️⃣ get all products
  async getAllProducts(req: Request, res: Response) {
    try {
      const data = await this.createQueryBuilder('product').getMany();
      res.status(200).json({
        status: 'success',
        results: data.length,
        data: {
          data,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }
  //2️⃣ get product
  async getProduct(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const oneProduct = await this.createQueryBuilder('product')
        .select()
        .where('prod_id = :query', { query: id })
        .getOne();

      res.status(200).json({
        status: 'success',
        data: {
          oneProduct,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }

  //3️⃣ create new product ==> only for admins, editors,
  async createProduct(req: Request, res: Response) {
    const { prodName, price, quantity, position}  = req.body;
    try {
      const product = new Product();
      product.prod_name = prodName;
      product.price = price;
      product.quantity = quantity;
      product.position = position;

      const prodData = await this.save(product);
      res.status(201).json({
        status: 'success',
        data: prodData,
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }

  //4️⃣ update product =>  for admins, editors and
  async updateProduct(req: Request, res: Response) {
    res.status(400).json({
      status: 'success',
      message: '🤷🏻 This path is not defined yet!!!',
    });
  }

  //5️⃣ delete product => only for admins, editors
  async deleteProduct(req: Request, res: Response) {
    res.status(400).json({
      status: 'success',
      message: '🤷🏻 This path is not defined yet!!!',
    });
  }
}
