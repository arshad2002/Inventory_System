/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryEntity } from '../Entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { ProductEntity } from '../Entities/product.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity,ProductEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}