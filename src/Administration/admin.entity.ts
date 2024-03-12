import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity("admin")
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    fullName: string;

    @Column({ type: "bigint", unsigned: true, default: 0 })
    phone: string;

    @BeforeInsert()
    generateRandomNumber() {
        this.id = Math.floor(Math.random() * 1000);
    }

}
