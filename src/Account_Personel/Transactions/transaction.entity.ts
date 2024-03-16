/* eslint-disable prettier/prettier */
import { IsInt } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transaction')
export class TransactionEntity{
    @PrimaryGeneratedColumn()
    @IsInt()
    Transaction_id: number;
    @Column()
    Employee_id: number;
    
    
    @Column()
    Transaction_type: string;
    @Column()
    Amount: number;
    @Column()
    Date : string;
    
   
}