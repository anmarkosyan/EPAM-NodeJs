import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { Client } from './Client';
import { JoinColumn, JoinTable } from 'typeorm/browser';

export const enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  GHOST = 'ghost',
}

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  prod_id: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false,
  })
  prod_name: string;

  @Column({ type: 'real' })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToMany(() => Client)
  @JoinTable({
    name: 'clients_products',
    joinColumn: {
      name: 'product',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'client',
      referencedColumnName: 'clt_id',
    },
  })
  clients: Client[];

  @Column({
    type: 'enum',
    enum: [UserRole.ADMIN, UserRole.EDITOR, UserRole.GHOST],
    default: UserRole.ADMIN,
  })
  position: UserRole;
}
