/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Patch, Body, Delete, Post, ValidationPipe, UsePipes, NotFoundException, UseGuards, Put } from '@nestjs/common';
// import { AdminService } from './admin.service';
// import { ManagerEntity } from './admin.entity';
// import { AdminDTO, AdminUpdateDTO, CustomerDTO, CutomerUpdateDTO } from './admin.dto';
// import { CustomerEntity } from 'src/Customer/customer.entity';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from './auth/auth.guard';
import { Request } from 'express';
import { ManagerService } from './managerInfo.service';
import { ManagerDTO } from './managerInfo.dto';
import { ManagerEntity } from './managerInfo.entity';


@Controller('managers')
@UseGuards(AuthGuard)
export class ManagerController {
  constructor(private readonly adminService: ManagerService) {}
  

  //! Admin

  @Post('')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createManager(@Body() adminDTO: ManagerDTO): Promise<ManagerEntity> {
    return await this.adminService.createManager(adminDTO);
  }


 
  



  

 
  
  

 




 







}

