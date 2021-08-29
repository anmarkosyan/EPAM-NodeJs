import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ClientRepository } from '../repository/client.repo';

export class ClientController {
  static async createClient(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ClientRepository);
    await manager.createClient(req, res);
  }

  static async getAllClients(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ClientRepository);
    await manager.getAllClients(req, res);
  }

  static async getClient(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ClientRepository);
    await manager.getClient(req, res);
  }

  static async updateClient(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ClientRepository);
    await manager.updateClient(req, res);
  }

  static async deleteClient(req: Request, res: Response) {
    const manager = getManager().getCustomRepository(ClientRepository);
    await manager.deleteClient(req, res);
  }
}
