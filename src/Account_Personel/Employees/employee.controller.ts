/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors, ValidationPipe } from '@nestjs/common';
// import { ManagerDTO } from './managerDTO';
// import { EmployeeService } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
// import { CategoryDTO } from './Category/categoryDTO';
// import { CategoryService } from './Category/category.service';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { EmployeeService } from './employee.service';
import { EmployeeDTO } from './employeeDTO';
import { EmployeEntity } from './employeeEntity';
// import { ProductEntity } from './Entities/product.entity';
// import { appService } from './admin.service';
// import { ManagerDTO } from './adminDTO';
//import { AppService } from './app.service';

@Controller('/employee')
export class EmployeeController {
  constructor(private readonly appService: EmployeeService) { }


  @Post('addEmployee')
  @UsePipes(new ValidationPipe)
  async Employee(@Body() employeeInfo: EmployeeDTO): Promise<EmployeeDTO> {
    
   

    
      return this.appService.Employee(employeeInfo);
   
  }


  @Get('allemployee')
  async getAllEmployee(): Promise<EmployeEntity[]> {
    return await this.appService.getAllEmployee();
  }


  @Get('employee/:id')
  async getEmployeeById(@Param('id') id: number): Promise<EmployeEntity> {
    return await this.appService.getEmployeeById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe)
  async updateemployeeByID(@Param('id') id: number, @Body() updateEmployee: EmployeeDTO): Promise<EmployeeDTO> {
    return this.appService.updateemployeeByID(id, updateEmployee);
  }

 

  }



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

