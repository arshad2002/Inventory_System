/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors, ValidationPipe } from '@nestjs/common';
// import { ManagerDTO } from './managerDTO';
// import {  } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
// import { CategoryDTO } from './Category/categoryDTO';
// import { CategoryService } from './Category/category.service';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { TransactionService } from './transaction.service';
import { TransactionDTO } from './transactionDTO';
import { TransactionEntity } from './transaction.entity';
// import {  } from './employee.service';
// import { TransactionDTO } from './employeeDTO';
// import { TransactionEntity } from './employeeEntity';
// import { ProductEntity } from './Entities/product.entity';
// import { appService } from './admin.service';
// import { ManagerDTO } from './adminDTO';
//import { AppService } from './app.service';

@Controller('/transaction')
export class TransactionController {
  constructor(private readonly appService: TransactionService) { }


  @Post('addtransaction')
  @UsePipes(new ValidationPipe)
  async Transaction(@Body() transactionInfo: TransactionDTO): Promise<TransactionDTO> {
    
   

    
      return this.appService.Transaction(transactionInfo);
   
  }


  @Get('alltransaction')
  async getAllTransaction(): Promise<TransactionEntity[]> {
    return await this.appService.getAllTransaction();
  }


  @Get('transaction/:id')
  async getTransactionById(@Param('id') id: number): Promise<TransactionEntity> {
    return await this.appService.getTransactionById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe)
  async modifyTransaction(@Param('id') id: number, @Body() updateEmployee: TransactionDTO): Promise<TransactionDTO> {
    return this.appService.modifyTransaction(id, updateEmployee);
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

