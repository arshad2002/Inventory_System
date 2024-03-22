/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './Entities/product.entity';
import { Repository } from 'typeorm';
import { ManagerDTO } from './managerDTO';
import { CategoryEntity } from './Entities/category.entity';
import { CategoryDTO } from './Category/categoryDTO';
// import { SupplierEntity } from './Entities/supplier.entity';
// import { AdminEntity } from './admin.entity';
// import { Repository } from 'typeorm';
// import { AdminDTO } from './adminDTO';

@Injectable()
export class ManagerService {
  constructor(@InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>) { }
  
  
  async createNewProduct(productInfo: ManagerDTO): Promise<ManagerDTO> {
    return this.productRepo.save(productInfo);
  }


  async getAllProducts(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }

  async getProductByName(): Promise<ProductEntity[]> {
    return await this.productRepo.find({
      where : {Product_name:"Tshirt"}
    });
  }





  async getProductById(id: number): Promise<ProductEntity> {
    const product = await this.productRepo.findOneBy({id});
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }










    async updateProductById(id: number, updateProduct: ManagerDTO): Promise<ManagerDTO> {
      await this.productRepo.update(id, updateProduct);
      return this.productRepo.findOneBy({id:id}); }





      async deleteProductById(id: number): Promise<string> {
        const product = await this.productRepo.findOneBy({id});
        if (!product) {
          throw new NotFoundException('product not found');
        }
        await this.productRepo.remove(product);
        return 'Product' +id+ ' Deleted Successfully';
      }
      




















}
