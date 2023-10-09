import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { productCategory } from '../enums/product-category.enum';

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
  @CreateDateColumn()
  createdAt!: Date;
  @UpdateDateColumn()
  updatedAt!: Date;
}
