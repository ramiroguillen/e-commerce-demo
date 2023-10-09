import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { productCategory } from '../enums/product-category.enum';

export class CreateProductDto {
  @IsOptional()
  id!: string;
  @IsNotEmpty()
  @IsString()
  title!: string;
  @IsOptional()
  @IsString()
  description!: string;
  @IsNotEmpty()
  category!: productCategory;
  @IsNotEmpty()
  @IsNumber()
  price!: number;
  @IsNotEmpty()
  @IsNumber()
  stock!: number;
  @IsOptional()
  @IsString()
  image!: string;
  @IsOptional()
  @IsDate()
  createdAt!: Date;
  @IsOptional()
  @IsDate()
  updatedAt!: Date;
}
