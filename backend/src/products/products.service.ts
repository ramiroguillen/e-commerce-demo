import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      return await this.productRepository.save(product);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.productRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.productRepository.findOneBy({ id });
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.productRepository.update(id, updateProductDto);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.productRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
