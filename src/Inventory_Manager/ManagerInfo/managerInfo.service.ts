/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
// import { ManagerEntity } from './admin.entity';
// import { ManagerDTO, AdminUpdateDTO, CustomerDTO, CutomerUpdateDTO, loginDTO } from './managerInfo.dto';
// import { CustomerEntity } from 'src/Customer/customer.entity';
import { JwtService } from '@nestjs/jwt';
import { ManagerEntity } from './managerInfo.entity';
import { ManagerDTO, loginDTO } from './managerInfo.dto';

@Injectable()
export class ManagerService {
    findOne(logindata: loginDTO) {
        throw new Error('Method not implemented.');
    }
 
  constructor(
    @InjectRepository(ManagerEntity)
    private adminRepository: Repository<ManagerEntity>,
  
    private jwtService: JwtService

  ) {}


  async createAdmin(adminDTO: ManagerDTO): Promise<ManagerEntity> {
    const admin = new ManagerEntity();
    admin.name = adminDTO.name;
    admin.phone = adminDTO.phone;
    admin.isActive = adminDTO.isActive;
    admin.email =adminDTO.email;
    admin.password =adminDTO.password;

    return await this.adminRepository.save(admin);
  }



  async getAdminsWithNullFullName(): Promise<ManagerEntity[]> {
    return await this.adminRepository.find({
      where: {
        name: Not(Not('')),
      },
    });
  }

  

  async findOneBy( logindata:loginDTO): Promise<any> {
    return await this.adminRepository.findOneBy({email:logindata.email});
  }
    

//! Customers

// async createCustomer(customerDTO: CustomerDTO): Promise<CustomerEntity> {
//   const customer = new CustomerEntity();
//   customer.name = customerDTO.name;
//   customer.phone = customerDTO.phone;
//   customer.email =customerDTO.email;
//   customer.password =customerDTO.password;

//   return await this.customerRepository.save(customer);
// }

// async updateCustomer(id: number, customerUpdateDTO: CutomerUpdateDTO): Promise<CustomerEntity> {
//   const customer = await this.customerRepository.findOneBy({ id });
//   if (!customer) {
//     throw new NotFoundException('Admin not found');
//   }

//   if (customerUpdateDTO.name) {
//     customer.name = customerUpdateDTO.name;
//   }

//   if (customerUpdateDTO.email) {
//     customer.email = customerUpdateDTO.email;
//   }

//   if (customerUpdateDTO.password) {
//     customer.password = customerUpdateDTO.password;
//   }

//   if (customerUpdateDTO.phone) {
//     customer.phone = customerUpdateDTO.phone;
//   }

//   return await this.customerRepository.save(customer);
// }

// async getAllCustomers(): Promise<CustomerEntity[]> {
//   return await this.customerRepository.find();
// }


// async getCustomerById(id: number): Promise<CustomerEntity> {
//   const customer = await this.customerRepository.findOneBy({id});
//   if (!customer) {
//     throw new NotFoundException('Customer not found');
//   }
//   return customer;
// }

// async deleteCustomerById(id: number): Promise<string> {
//   const customer = await this.customerRepository.findOneBy({id});
//   if (!customer) {
//     throw new NotFoundException('Customer not found');
//   }
//   await this.customerRepository.remove(customer);
//   return 'Custome r' +id+ ' Deleted Successfully';
// }


  


//! Accountants
	getAccountants(): object{
		return {message: "List Of All Accountants"}
	}
  getAccountantsById(id: string): object{
    return {message: "Your AccountantID is " + id};
    }


//! Products
	getProducts(): object{
		return {message: "List Of All Products"}
	}
  getProductsById(id: string): object{
    return {message: "Your ProductID is " + id};
    }

//! Categories
	getCategories(): object{
		return {message: "List Of All Categories"}
	}
  getCategoriesById(id: string): object{
    return {message: "Your CategoryID is " + id};
    }

}