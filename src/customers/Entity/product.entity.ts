import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { Category } from './category.entity';
import { CustomerEntity } from './customer.entity';


@Entity("product")
export class ProductEntity {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    product_name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

}