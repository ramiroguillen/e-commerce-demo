import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { productCategory } from '../enums/product-category.enum';
import { Order } from 'src/orders/entities/order.entity';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id!: string;
  @Column()
  title!: string;
  @Column()
  description!: string;
  @Column({ type: 'enum', enum: productCategory, nullable: false })
  category!: productCategory;
  @Column()
  price!: number;
  @Column()
  stock!: number;
  @Column()
  image!: string;
  @ManyToMany(() => Order)
  @JoinTable()
  orders!: Order[];
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
}
