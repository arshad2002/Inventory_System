import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CustomerProfileEntity } from './customerprofile.entity';

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  filename: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  account_creation_date: Date;

  @OneToMany(() => CustomerProfileEntity, profile => profile.user)
  profiles: CustomerProfileEntity[];
  
}
