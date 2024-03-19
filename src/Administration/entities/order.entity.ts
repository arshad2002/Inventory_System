// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
// import { CustomerEntity } from './customer.entity';
// import { OrderProductEntity } from './order-product.entity';

// @Entity('Order')
// export class OrderEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => CustomerEntity, customer => customer.orders)
//   customer: CustomerEntity; 

//   @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.order)
//   orderProducts: OrderProductEntity[];

//   @Column({ type: 'decimal', precision: 10, scale: 2 })
//   totalAmount: number;

//   @CreateDateColumn()
//   createdAt: Date; 
// }
