import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('client')
export class Client extends BaseEntity {
  @PrimaryColumn({ type: 'numeric' })
  clt_id: number;

  @Column({
    length: 150,
    nullable: false,
  })
  first_name: string;

  @Column({
    length: 150,
    nullable: false,
  })
  last_name: string;

  @Column({
    unique: true,
    length: 150,
    nullable: false,
  })
  email: string;

  @Column({
    default: true,
    nullable: false,
  })
  is_active: boolean;

  @Column({ unique: true })
  card_number: number;

  @Column({ type: 'numeric' })
  balance: number;

  @CreateDateColumn({ nullable: false })
  created_at: Date;

  @UpdateDateColumn({ nullable: false })
  updated_at: Date;
}
