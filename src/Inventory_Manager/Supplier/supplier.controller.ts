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

    










  
//   @Get()
//   async getAllUsers(): Promise<ManagerDTO[]> {
//     return this.appService.getAllUsers();
//   }
//   @Get(':id')
//   async getUserById(@Param('id') id: number): Promise<ManagerDTO> {
//     return this.appService.getUserById(id);
//   }
//   @Put(':id')
//   @UsePipes(new ValidationPipe)
//   async updateUser(@Param('id') id: number, @Body() updatedUser: ManagerDTO): Promise<ManagerDTO> {
//     return this.appService.updateUser(id, updatedUser);
//   }



  // @Get('/user')
  // getHello(): string {
  //   return this.appService.getHelloB();
  // }
  // @Get('/users/:id')
  // getUserById(@Param('id') id: string): object {
  //   return this.appService.getUserById(id);
  // }
  // @Post('/adduser')
  // addUser(@Body() myobj: object): object {
  //   return this.appService.addUser(myobj);
  // }
}
