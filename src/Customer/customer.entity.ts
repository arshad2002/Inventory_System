import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne} from 'typeorm';

@Entity("customer")
export class CustomerEntity{
@PrimaryGeneratedColumn({name: "ID"})
id: number;
@Column({name: "Name"})
name: string;
@Column({name: "Email"})
email: string;
@Column({name: "Password"})
password: string;

}