import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { AdminDTO, AdminUpdateDTO } from './admin.dto';
import { validate } from 'class-validator';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
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

  


  // async updateAdmin(id: number, adminUpdateDTO: AdminUpdateDTO): Promise<AdminEntity> {
  //   const admin = await this.adminRepository.findOneBy({id});
  //   if (!admin) {
  //       throw new NotFoundException('Admin not found');
  //   }

  //   if (adminUpdateDTO.name) {
  //       admin.name = adminUpdateDTO.name;
  //   }

  //   if (adminUpdateDTO.email) {
  //       admin.email = adminUpdateDTO.email;
  //   }

  //   if (adminUpdateDTO.password) {
  //       admin.password = adminUpdateDTO.password;
  //   }

  //   if (adminUpdateDTO.phone) {
  //       admin.phone = adminUpdateDTO.phone;
  //   }

  //   return await this.adminRepository.save(admin);
  // }

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
    

//! Customers
  getCustomers(): object{
		return {message: "List Of All Customers"}
	}
  getCustomersById(id: string): object{
    return {message: "Your CustomerID is " + id};
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
