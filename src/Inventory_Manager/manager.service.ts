/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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
