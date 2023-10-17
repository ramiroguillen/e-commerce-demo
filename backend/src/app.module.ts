import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from './database/data-source';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
