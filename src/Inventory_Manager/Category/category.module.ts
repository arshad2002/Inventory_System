/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductEntity } from './Entities/product.entity';
// import { ManagerService } from './manager.service';
import { CategoryEntity } from '../Entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
// import { ManagerService } from '../manager.service';
// import { ManagerModule } from '../manager.module';
// import { AdminController } from './admin.controller';
// import { AdminService } from './admin.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AdminEntity } from './admin.entity';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}