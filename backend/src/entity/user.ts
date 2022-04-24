import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column({ unique: true })
    email!: string

    @Column({ type: "varchar", length: 100, nullable: true })
    title!: string;

    @Column()
    password!: string

    @Column({ nullable: true })
    phone!: string;

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date
}