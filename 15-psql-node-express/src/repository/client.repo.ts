import { Request, Response } from 'express';
import { EntityRepository, Repository } from 'typeorm';
import { Client } from '../entities/Client';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  //create new client
  async createClient(req: Request, res: Response) {
    try {
      const client = new Client();
      client.first_name = 'Aram';
      client.last_name = 'Markosyan';
      client.email = 'aram@gmail.com';

      const cltData = await this.save(client);
      res.send(cltData);
    } catch (e) {
      res.send(e);
    }
  }
}
