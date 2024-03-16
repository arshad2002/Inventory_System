/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { IsEmail, IsInt, isIn, isInt } from 'class-validator';
@Entity("suppliers")
export class SupplierEntity{
@PrimaryGeneratedColumn()
@IsInt()
id: number;
@Column()
Supplier_name: string;


@Column()
Contact: string;
@Column()

Email: string;
@Column()
Address: string;


}
