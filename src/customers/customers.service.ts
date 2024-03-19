import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerEntity } from './Entity/customer.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CustomerProfileEntity } from './Entity/customerprofile.entity';
import { ProductEntity } from './Entity/product.entity';
import { Category } from './Entity/category.entity';



@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,

    @InjectRepository(CustomerProfileEntity)
    private customerProfileRepository: Repository<CustomerProfileEntity>,

    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,

  ) {}

  async signUp(customerInfo) {
    const existingUserByUsername = await this.getCustomerByUserName(customerInfo.username);
    const existingUserByEmail = await this.getUserByEmail(customerInfo.email);
  
    if (existingUserByUsername || existingUserByEmail) {
      return { "message": "User Name or Email already in use" };
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(customerInfo.password, salt);
      customerInfo.password = hashedPassword;
      await this.customerRepository.save(customerInfo);
      return { "message": "SignUp completed" };
    }
  }
    
  async getCustomerByUserName(username: string): Promise<CustomerEntity | undefined>{
    return await this.customerRepository.findOne({where:{username}});
  }
  async getUserByEmail(email: string): Promise<CustomerEntity | undefined>{
    return await this.customerRepository.findOne({where: {email}});

  }

  async createProfile(profileInfo: CustomerProfileEntity): Promise<CustomerProfileEntity> {
    const newProfile = this.customerProfileRepository.create(profileInfo);
    return this.customerProfileRepository.save(newProfile);
  }

  async getProfilesById(userId: number): Promise<any> {
    return this.customerProfileRepository
        .createQueryBuilder('customerProfile')
        .where('customerProfile.user = :userId', { userId })
        .getMany();
  }
  
  updateProfile(updatedProfile: Partial<CustomerProfileEntity>): Promise<CustomerProfileEntity> {
    return this.customerProfileRepository.save(updatedProfile);
  }

  async deleteProfile(profileId: number): Promise<any> {
      return await this.customerProfileRepository.delete(profileId);
  }

  async getAllProducts(): Promise<any> {
    return this.productRepository.find();
  }

  async getProductByKeyWord(keyword: string): Promise<any> {
    return await this.productRepository.find({ where: { product_name: Like(`%${keyword}%`) } });
  }

}
