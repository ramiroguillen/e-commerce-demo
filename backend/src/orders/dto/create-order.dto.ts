import {
  IsDate,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Product } from 'src/products/entities/product.entity';

export class CreateOrderDto {
  @IsOptional()
  id!: string;
  @IsNotEmpty()
  products!: Product[];
  @IsOptional()
  @IsDate()
  createdAt!: Date;
  @IsOptional()
  @IsDate()
  updatedAt!: Date;
}
