import { AdminEntity } from 'src/Administration/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne} from 'typeorm';

@Entity("Customer")
export class CustomerEntity{
@PrimaryGeneratedColumn({name: "ID"})
id: number;
@Column({name: "Name", nullable:false})
name: string;
@Column({name: "Email", nullable:false})
email: string;
@Column({name: "Password", nullable:false})
password: string;

@Column({ name:"Phone", nullable:false})
phone: string;

@ManyToOne(()=>AdminEntity, admin => admin.customers)
admin: AdminEntity;

}