import {
  Entity,
  BaseEntity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './Product';

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  clt_id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  first_name: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  last_name: string;

  @Column({
    type: 'varchar',
    unique: true,
    length: 150,
    nullable: true,
  })
  email: string;

  @ManyToMany(() => Product)
  product: Product[];

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;
}
