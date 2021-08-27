import { Entity, BaseEntity, Column, PrimaryColumn } from 'typeorm';

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryColumn({ type: 'numeric' })
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
