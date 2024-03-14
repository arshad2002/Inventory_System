/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { ProductEntity } from './product.entity';
@Entity("categories")
export class CategoryEntity{
@PrimaryGeneratedColumn()
Category_id: number;
@Column()
Category_name: string;
@OneToMany(()=>ProductEntity,(product)=>product.category,{cascade:true})
products : ProductEntity[]
}
