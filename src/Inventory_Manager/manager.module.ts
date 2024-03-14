/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './Entities/product.entity';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
// import { AdminController } from './admin.controller';
// import { AdminService } from './admin.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AdminEntity } from './admin.entity';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}