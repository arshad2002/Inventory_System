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
    private managerRepo: Repository<ManagerEntity>,
  
    private jwtService: JwtService

  ) {}


  async createManager(adminDTO: ManagerDTO): Promise<ManagerEntity> {
    const admin = new ManagerEntity();
    admin.name = adminDTO.name;
    admin.phone = adminDTO.phone;
    admin.isActive = adminDTO.isActive;
    admin.email =adminDTO.email;
    admin.password =adminDTO.password;

    return await this.managerRepo.save(admin);
  }




  async findOneBy( logindata:loginDTO): Promise<any> {
    return await this.managerRepo.findOneBy({email:logindata.email});
  }


 
    


}