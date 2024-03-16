/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { EmployeEntity } from './Entities/product.entity';
import { Repository } from 'typeorm';
import { EmployeEntity } from './employeeEntity';
import { EmployeeDTO } from './employeeDTO';
// import { EmployeeDTO } from './managerDTO';
// import { CategoryEntity } from './Entities/category.entity';
// import { CategoryDTO } from './Category/categoryDTO';
// import { SupplierEntity } from './Entities/supplier.entity';
// import { AdminEntity } from './admin.entity';
// import { Repository } from 'typeorm';
// import { AdminDTO } from './adminDTO';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(EmployeEntity) private employeerepo: Repository<EmployeEntity>) { }
  
  
  async Employee(employeeInfo: EmployeeDTO): Promise<EmployeeDTO> {
    return this.employeerepo.save(employeeInfo);
  }

  async getAllEmployee(): Promise<EmployeEntity[]> {
    return await this.employeerepo.find();
  }

  async getEmployeeById(id: number): Promise<EmployeEntity> {
    const product = await this.employeerepo.findOneBy({id});
    if (!product) {
      throw new NotFoundException('employee not found');
    }
    return product;
  }

  async updateemployeeByID(id: number, updateProduct: EmployeeDTO): Promise<EmployeeDTO> {
    await this.employeerepo.update(id, updateProduct);
    return this.employeerepo.findOneBy({id:id}); }


}
