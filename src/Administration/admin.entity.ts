import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToMany } from 'typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';

@Entity("admin")
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    phone: string;

    @Column({ nullable: false })
    email: string;

    @Column({ default: true })
    isActive: boolean;

    @BeforeInsert()
    generateRandomNumber() {
        // Random ID generation logic if needed
        // this.id = Math.floor(Math.random() * 1000);
    }

    @OneToMany(()=>CustomerEntity, customer => customer.admin)
    customers: CustomerEntity[];
}
