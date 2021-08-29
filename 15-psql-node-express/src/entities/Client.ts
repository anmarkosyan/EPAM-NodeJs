import {
  Entity,
  BaseEntity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Transaction } from './Transactions';

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  clt_id: number;

  @Column({
    type: "varchar",
    length: 150,
    nullable: true,
  })
  first_name: string;

  @Column({
    type: "varchar",
    length: 150,
    nullable: true,
  })
  last_name: string;

  @Column({
    type:"varchar",
    unique: true,
    length: 150,
    nullable: true,
  })
  email: string;

  // @OneToMany(() => Transaction, transaction => transaction.client)
  // transactions: Transaction[];
  //
  // @Column({
  //   default: true,
  //   nullable: false,
  // })
  // is_active: boolean;
  //
  // @Column({ unique: true })
  // card_number: number;
  //
  // @Column({ type: 'numeric' })
  // balance: number;
  //
  // @CreateDateColumn({ nullable: false })
  // created_at: Date;
  //
  // @UpdateDateColumn({ nullable: false })
  // updated_at: Date;
}
