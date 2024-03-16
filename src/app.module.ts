/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerModule } from './Inventory_Manager/manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './Inventory_Manager/Category/category.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './Inventory_Manager/ManagerInfo/auth/auth.module';
import { ManagerModule2 } from './Inventory_Manager/ManagerInfo/managerInfo.module';
import { MulterModule } from '@nestjs/platform-express';
import { SupplierModule } from './Inventory_Manager/Supplier/supplier.module';
import { EmployeeModule } from './Account_Personel/Employees/employee.module';
import { TransactionModule } from './Account_Personel/Transactions/transaction.module';


@Module({
  imports: [TransactionModule,EmployeeModule,SupplierModule, MulterModule.register({dest:'./uploadedFiles'}), ManagerModule2, AuthModule, CustomersModule,ManagerModule,CategoryModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'inventory',//Change to your database name
    autoLoadEntities: true,
    entities :[],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
