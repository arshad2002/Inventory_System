import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([AdminEntity, CustomerEntity]),],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}