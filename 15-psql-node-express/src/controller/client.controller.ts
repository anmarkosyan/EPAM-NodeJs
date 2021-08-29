import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { ClientRepository } from '../repository/client.repo';

export class ClientController {
  static async createClient(req: Request, res: Response) {
    const manager = await getManager().getCustomRepository(ClientRepository);
    await manager.createClient(req, res);
  }
}
