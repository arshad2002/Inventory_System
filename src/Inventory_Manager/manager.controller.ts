/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ManagerDTO } from './managerDTO';
import { ManagerService } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { CategoryDTO } from './Category/categoryDTO';
import { CategoryService } from './Category/category.service';
// import { AdminService } from './admin.service';
// import { ManagerDTO } from './adminDTO';
//import { AppService } from './app.service';

@Controller('/products')
export class ManagerController {
  constructor(private readonly appService: ManagerService) { }


  @Post()
  @UsePipes(new ValidationPipe)
  async createProduct(@Body() productInfo: ManagerDTO): Promise<ManagerDTO> {
    
   

    return this.appService.createNewProduct(productInfo);
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
