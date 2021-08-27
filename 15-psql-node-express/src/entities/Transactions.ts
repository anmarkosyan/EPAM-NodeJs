import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TransactionTypes {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}
@Entity('transactions')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  trans_id: number;

  @Column({
    type: "enum",
    enum: TransactionTypes
  })
  type: string;

  @Column({ type: 'numeric' })
  amount: number;
}
