import { Injectable } from '@nestjs/common';
import { CustomerEntity } from './Entity/customer.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CustomerProfileEntity } from './Entity/customerprofile.entity';



@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customer: Repository<CustomerEntity>,

    @InjectRepository(CustomerProfileEntity)
    private customerProfile: Repository<CustomerProfileEntity>
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
      await this.customer.save(customerInfo);
      return { "message": "SignUp completed" };
    }
  }
    
  async getCustomerByUserName(username: string): Promise<CustomerEntity | undefined>{
    return await this.customer.findOne({where:{username}});
  }
  async getUserByEmail(email: string): Promise<CustomerEntity | undefined>{
    return await this.customer.findOne({where: {email}});

  }

  async createProfile(profileInfo: CustomerProfileEntity): Promise<CustomerProfileEntity> {
    const newProfile = this.customerProfile.create(profileInfo);
    return this.customerProfile.save(newProfile);
  }

  async getProfilesById(userId: number): Promise<any> {
    return this.customerProfile
        .createQueryBuilder('customerProfile')
        .where('customerProfile.user = :userId', { userId })
        .getMany();
  }
  
  updateProfile(updatedProfile: Partial<CustomerProfileEntity>): Promise<CustomerProfileEntity> {
    return this.customerProfile.save(updatedProfile);
  }

  async deleteProfile(profileId: number): Promise<any> {
      return await this.customerProfile.delete(profileId);
  }







}
