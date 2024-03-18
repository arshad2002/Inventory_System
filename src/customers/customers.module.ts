import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './Entity/customer.entity';
import { CustomerProfileEntity } from './Entity/customerprofile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, CustomerProfileEntity])],
  controllers: [CustomersController],
  providers: [CustomersService],

})
export class CustomersModule {}
