import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './Entity/customer.entity';
import { CustomerProfileEntity } from './Entity/customerprofile.entity';
import { ProductEntity } from './Entity/product.entity';
import { Category } from './Entity/category.entity';
import { CartEntity } from './Entity/cart.entity';
import { OrderEntity } from './Entity/order.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, CustomerProfileEntity,ProductEntity,Category,CartEntity,OrderEntity])],
  controllers: [CustomersController],
  providers: [CustomersService],

})
export class CustomersModule {}
