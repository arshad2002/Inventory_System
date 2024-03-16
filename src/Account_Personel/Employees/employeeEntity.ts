/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
// import { CategoryEntity } from './category.entity';
import { IsInt, isIn, isInt } from 'class-validator';
@Entity("employeeacc")
export class EmployeEntity{
@PrimaryGeneratedColumn()
@IsInt()
id: number;
@Column()
Employee_name: string;


@Column()
Position: string;
@Column()
HireDate: string;
@Column()
Salary: number;
@Column()
Username: string;
@Column()
UserType: string;



}


