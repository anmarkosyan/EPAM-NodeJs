import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ProductRepository } from '../repository/product.repo';

export class ProductController {
  static async createProduct(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ProductRepository);
    await manager.createProduct(req, res);
  }

  static async getAllProducts(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ProductRepository);
    await manager.getAllProducts(req, res);
  }

  static async getProduct(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ProductRepository);
    await manager.getProduct(req, res);
  }

  static async updateProduct(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ProductRepository);
    await manager.updateProduct(req, res);
  }

  static async deleteProduct(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ProductRepository);
    await manager.deleteProduct(req, res);
  }
}
