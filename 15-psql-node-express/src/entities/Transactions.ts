import {
  Entity,
  BaseEntity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionTypes {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}
@Entity('transactions')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  trans_id: number;

  @Column({
    type: 'enum',
    enum: TransactionTypes,
  })
  type: string;

  @Column({ type: 'numeric' })
  amount: number;

  @ManyToOne(() => Client, client => client.transactions)
  @JoinColumn({
    name: 'clt_id',
  })
  client: Client;
}
