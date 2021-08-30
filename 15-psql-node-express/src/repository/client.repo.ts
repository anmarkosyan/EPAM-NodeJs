import { Request, Response, NextFunction } from 'express';
import { EntityRepository, Repository } from 'typeorm';
import { Client } from '../entities/Client';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {

  //1️⃣ get all clients
  async getAllClients(req: Request, res: Response) {
    try {
      const data = await this.createQueryBuilder('client').getMany();
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
  //2️⃣ get client
  async getClient(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const oneData = await this.createQueryBuilder('client')
        .select()
        .where('client.clt_id = :query', { query: id })
        .getOne();

      res.status(200).json({
        status: 'success',
        data: {
          oneData,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }

  //3️⃣ create new client
  async createClient(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;
    try {
      const client = new Client();
      client.first_name = firstName;
      client.last_name = lastName;
      client.email = email;

      const cltData = await this.save(client);
      res.status(201).json({
        status: 'success',
        data: cltData,
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }

  //4️⃣ update client
  async updateClient(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body;
    const id = req.params.id;
    try {
      await this.createQueryBuilder('client')
        .update(Client)
        .set({
          first_name: firstName,
          last_name: lastName,
          email,
        })
        .where('client.clt_id = :query', { query: id })
        .execute();

      const updatedData = await this.findOne(id);

      res.status(201).json({
        status: 'success',
        data: {
          updatedData,
        },
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }

  //5️⃣ delete client
  async deleteClient(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await this.createQueryBuilder('client')
        .delete()
        .where('clt_id = :query', { query: id })
        .execute();
      res.status(204).json({
        status: 'success',
        data: null,
      });
    } catch (e) {
      res.status(400).json({
        status: 'fail',
        message: 'Something want wrong!!',
      });
    }
  }
}


