/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, ValidationPipe } from '@nestjs/common';
// import { ManagerDTO } from './managerDTO';
// import { ManagerService } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
// import { SupplierService } from './category.service';
// import { SupplierDTO } from './categoryDTO';
import { ManagerDTO } from '../managerDTO';
import { ManagerService } from '../manager.service';
import { SupplierDTO } from './supplierDTO';
import { SupplierService } from './supplier.service';
import { SupplierEntity } from '../Entities/supplier.entity';
// import { AdminService } from './admin.service';
// import { ManagerDTO } from './adminDTO';
//import { AppService } from './app.service';

@Controller('/supplier')
export class SupplierController {
  constructor(private readonly appService: SupplierService) { }


  @Post('/add')
  @UsePipes(new ValidationPipe)
  async createNewSupplier(@Body() supplierInfo : SupplierDTO): Promise<SupplierDTO> {

   
        return this.appService.createNewSupplier(supplierInfo);
    
   
    
  }

  @Get('all')
  async getAllSuppliers(): Promise<SupplierEntity[]> {
    return await this.appService.getAllSuppliers();
  }

    










}
