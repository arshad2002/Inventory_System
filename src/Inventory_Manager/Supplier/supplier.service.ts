/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { ProductEntity } from './Entities/product.entity';
import { Repository } from 'typeorm';
// import { SupplierDTO } from './categoryDTO';
// import { SupplierEntity } from '../Entities/category.entity';
import { ProductEntity } from '../Entities/product.entity';
import { ManagerDTO } from '../managerDTO';
import { SupplierEntity } from '../Entities/supplier.entity';
import { SupplierDTO } from './supplierDTO';
// import { ManagerDTO } from './managerDTO';
// import { SupplierEntity } from './Entities/supplier.entity';
// import { AdminEntity } from './admin.entity';
// import { Repository } from 'typeorm';
// import { AdminDTO } from './adminDTO';

@Injectable()
export class SupplierService {
  constructor(@InjectRepository(SupplierEntity) private supplierRepo: Repository<SupplierEntity>
 
  
  ) { }

     

  
  async createNewSupplier(supplierInfo: SupplierDTO): Promise<SupplierDTO> {
    return this.supplierRepo.save(supplierInfo);


  }

  async getAllSuppliers(): Promise<SupplierEntity[]> {
    return await this.supplierRepo.find();
  }




//   async createProduct(Category_id:number,id:ProductEntity):Promise<ProductEntity>{
//     const category = await this.supplierRepo.findOneBy({Category_id});
//     if (!category) {
//       throw new Error('Category not found');
//   }
//     id.category = category;
//     return this.productRepo.save(id)
//   }

  






//   async getAllUsers(): Promise<ManagerDTO[]> {
//     return this.productRepo.find();
//   }
//   async getUserById(id: number): Promise<ManagerDTO> {
//     return this.productRepo.findOneBy({id:id});
//     }

//     async updateUser(id: number, updatedUser: ManagerDTO): Promise<ManagerDTO> {
//       await this.productRepo.update(id, updatedUser);
//       return this.productRepo.findOneBy({id:id}); }
      




















  // getHelloB(): string {
  //   return 'Hello universe';
  // }
  // getUserById(id: string): object {
  //   return { message: 'your id is' + id };
  // }
  // getReady(): object {
  //   return { message: 'Its time to tot totototo get ready' };
  // }
  // addUser(myobj: object): object {
  //   return myobj;
  // }
}
