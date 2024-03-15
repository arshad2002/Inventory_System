/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { IsInt, isIn, isInt } from 'class-validator';
@Entity("products")
export class ProductEntity{
@PrimaryGeneratedColumn()
@IsInt()
id: number;
@Column()
Product_name: string;


@Column()
Supplier_id: number;
@Column()
Unit_price: number;
@Column()
StockQuantity: number;

@ManyToOne(()=>CategoryEntity,(category)=>category.products)
category:CategoryEntity;

}
