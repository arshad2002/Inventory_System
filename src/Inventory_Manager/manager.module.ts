/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './Entities/product.entity';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { CategoryEntity } from './Entities/category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity,CategoryEntity])],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}