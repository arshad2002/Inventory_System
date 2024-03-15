import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { AdminDTO, AdminUpdateDTO, CustomerDTO, CutomerUpdateDTO, loginDTO } from './admin.dto';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
    findOne(logindata: loginDTO) {
        throw new Error('Method not implemented.');
    }
  save(customerDTO: CustomerDTO): CustomerEntity | PromiseLike<CustomerEntity> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
    private jwtService: JwtService

  ) {}


  async createAdmin(adminDTO: AdminDTO): Promise<AdminEntity> {
    const admin = new AdminEntity();
    admin.name = adminDTO.name;
    admin.phone = adminDTO.phone;
    admin.isActive = adminDTO.isActive;
    admin.email =adminDTO.email;
    admin.password =adminDTO.password;

    return await this.adminRepository.save(admin);
  }

  async updateAdmin(id: number, adminUpdateDTO: AdminUpdateDTO): Promise<AdminEntity> {
    const admin = await this.adminRepository.findOneBy({ id });
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
  
    if (adminUpdateDTO.name) {
      admin.name = adminUpdateDTO.name;
    }
  
    if (adminUpdateDTO.email) {
      admin.email = adminUpdateDTO.email;
    }
  
    if (adminUpdateDTO.password) {
      admin.password = adminUpdateDTO.password;
    }
  
    if (adminUpdateDTO.phone) {
      admin.phone = adminUpdateDTO.phone;
    }
  
    return await this.adminRepository.save(admin);
  }


  async getAdminsWithNullFullName(): Promise<AdminEntity[]> {
    return await this.adminRepository.find({
      where: {
        name: Not(Not('')),
      },
    });
  }

  async deleteAdmin(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }

  async findOneBy( logindata:loginDTO): Promise<any> {
    return await this.adminRepository.findOneBy({email:logindata.email});
  }
    

//! Customers

async createCustomer(customerDTO: CustomerDTO): Promise<CustomerEntity> {
  const customer = new CustomerEntity();
  customer.name = customerDTO.name;
  customer.phone = customerDTO.phone;
  customer.email =customerDTO.email;
  customer.password =customerDTO.password;

  return await this.customerRepository.save(customer);
}

async updateCustomer(id: number, customerUpdateDTO: CutomerUpdateDTO): Promise<CustomerEntity> {
  const customer = await this.customerRepository.findOneBy({ id });
  if (!customer) {
    throw new NotFoundException('Admin not found');
  }

  if (customerUpdateDTO.name) {
    customer.name = customerUpdateDTO.name;
  }

  if (customerUpdateDTO.email) {
    customer.email = customerUpdateDTO.email;
  }

  if (customerUpdateDTO.password) {
    customer.password = customerUpdateDTO.password;
  }

  if (customerUpdateDTO.phone) {
    customer.phone = customerUpdateDTO.phone;
  }

  return await this.customerRepository.save(customer);
}

async getAllCustomers(): Promise<CustomerEntity[]> {
  return await this.customerRepository.find();
}


async getCustomerById(id: number): Promise<CustomerEntity> {
  const customer = await this.customerRepository.findOneBy({id});
  if (!customer) {
    throw new NotFoundException('Customer not found');
  }
  return customer;
}

async deleteCustomerById(id: number): Promise<string> {
  const customer = await this.customerRepository.findOneBy({id});
  if (!customer) {
    throw new NotFoundException('Customer not found');
  }
  await this.customerRepository.remove(customer);
  return 'Custome r' +id+ ' Deleted Successfully';
}


  


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
