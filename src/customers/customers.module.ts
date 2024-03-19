import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './Entity/customer.entity';
import { CustomerProfileEntity } from './Entity/customerprofile.entity';
import { ProductEntity } from './Entity/product.entity';
import { Category } from './Entity/category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, CustomerProfileEntity,ProductEntity,Category])],
  controllers: [CustomersController],
  providers: [CustomersService],

})
export class CustomersModule {}
