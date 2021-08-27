import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  prod_id: number;

  @Column({
    length: 150,
    nullable: false,
  })
  prod_name: string;

  @Column({
    default: true,
    nullable: false,
  })
  is_exists: boolean;

  @Column({ type: 'numeric' })
  balance: number;
}
