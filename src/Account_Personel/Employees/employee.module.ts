/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeEntity } from './employeeEntity';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
// import { ProductEntity } from './Entities/product.entity';
// import { ManagerService } from './manager.service';
// import { ManagerController } from './manager.controller';
// import { CategoryEntity } from './Entities/category.entity';
// import { AdminController } from './admin.controller';
// import { AdminService } from './admin.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AdminEntity } from './admin.entity';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeEntity])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}