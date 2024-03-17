/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { ProductEntity } from './Entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryDTO } from './categoryDTO';
import { CategoryEntity } from '../Entities/category.entity';
import { ProductEntity } from '../Entities/product.entity';
import { ManagerDTO } from '../managerDTO';
// import { ManagerDTO } from './managerDTO';
// import { SupplierEntity } from './Entities/supplier.entity';
// import { AdminEntity } from './admin.entity';
// import { Repository } from 'typeorm';
// import { AdminDTO } from './adminDTO';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(CategoryEntity) private categoryRepo: Repository<CategoryEntity>,
  @InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>
  
  ) { }

     

  
  async createNewCategory(categoryInfo: CategoryDTO): Promise<CategoryDTO> {
    return this.categoryRepo.save(categoryInfo);


  }

  async createProduct(Category_id:number,id:ProductEntity):Promise<ProductEntity>{
    const category = await this.categoryRepo.findOneBy({Category_id});
    if (!category) {
      throw new Error('Category not found');
  }
    id.category = category;
    return this.productRepo.save(id)
  }

  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.categoryRepo.find();
  }




  async deleteCategoryById(Category_id: number): Promise<string> {
    const category = await this.categoryRepo.findOneBy({Category_id});
    if (!category) {
      throw new NotFoundException('category not found');
    }
    await this.categoryRepo.remove(category);
    return 'category' +Category_id+ ' Deleted Successfully';
  }



  async updateProductById(Category_id: number, updateProduct: CategoryDTO): Promise<CategoryDTO> {
    await this.categoryRepo.update(Category_id, updateProduct);
    return this.categoryRepo.findOneBy({Category_id:Category_id}); }
  

  







      




















}
