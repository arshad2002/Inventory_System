import { Controller, Get, Param, Patch, Body, Delete, Post, ValidationPipe, UsePipes, NotFoundException, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { AdminDTO, AdminUpdateDTO, CustomerDTO, CutomerUpdateDTO } from './admin.dto';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from './auth/auth.gaurd';
import { Request } from 'express';


@Controller('admin')
@UseGuards(AuthGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  

  //! Admin

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createAdmin(@Body() adminDTO: AdminDTO): Promise<AdminEntity> {
    return await this.adminService.createAdmin(adminDTO);
  }

  @Patch('update/:id')
  @UsePipes(new ValidationPipe())
  async updateAdmin(@Param('id') id: number, @Body() adminUpdateDTO: AdminUpdateDTO): Promise<AdminEntity> {
  const updatedAdmin = await this.adminService.updateAdmin(id, adminUpdateDTO);
   return updatedAdmin;
  }


  @Get('null')
  async getAdminsWithNullFullName(): Promise<AdminEntity[]> {
    return await this.adminService.getAdminsWithNullFullName();
  }

  @Delete('delete/:id')
  async deleteAdmin(@Param('id') id: number): Promise<void> {
     await this.adminService.deleteAdmin(id);
  }




 

//! Customers
  @Post('addcustomer')
  @UsePipes(new ValidationPipe())
  async createCustomer(@Body() customerDTO: CustomerDTO): Promise<CustomerEntity> {
    return await this.adminService.createCustomer(customerDTO);
  }

  @Patch('updatecustomer/:id')
  @UsePipes(new ValidationPipe())
  async updateCustomer(@Param('id') id: number, @Body() customerUpdateDTO:CutomerUpdateDTO): Promise<CustomerEntity> {
  const updateCustomer = await this.adminService.updateCustomer(id, customerUpdateDTO);
  return updateCustomer;
  }

  @Get('allcustomers')
  async getAllCustomers(): Promise<CustomerEntity[]> {
    return await this.adminService.getAllCustomers();
  }

  @Get('customers/:id')
  async getCustomerById(@Param('id') id: number): Promise<CustomerEntity> {
    return await this.adminService.getCustomerById(id);
  }

  @Delete('customers/:id')
  async deleteCustomerById(@Param('id') id: number): Promise<string> {
    try {
      return await this.adminService.deleteCustomerById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }


//! Accountants
	@Get('allaccountants')
	getAccountants(): object{
		return this.adminService.getAccountants();
	}
	@Get('accountant/:id')
	getAccountantsById(@Param('id') id: string): object{
    return this.adminService.getAccountantsById(id);
	}

//! Products
	@Get('allproducts')
	getProducts(): object{
		return this.adminService.getProducts();
	}
	@Get('product/:id')
  getProductsById(@Param('id') id: string): object{
      return this.adminService.getProductsById(id);
  }

//! Categories
	@Get('allcategoories')
	getCategories(): object{
		return this.adminService.getCategories();
  }
	@Get('category/:id')
  getCategoriesById(@Param('id') id: string): object{
      return this.adminService.getCategoriesById(id);
  }
}


