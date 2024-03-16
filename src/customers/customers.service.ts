import { Injectable } from '@nestjs/common';
import { CustomerEntity } from './Entity/customer.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { And, Repository, getRepository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CustomerDto } from './dto/customers.dto';



@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customer: Repository<CustomerEntity>
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
  async getUserByEmail(email: string){
    return await this.customer.findOne({where: {email}});

  }


}
