import { Controller, Get, Param, Patch, Body, Delete, Post, ValidationPipe, UsePipes, NotFoundException, UseGuards, Req, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { AdminDTO, AdminUpdateDTO, CustomerDTO, CutomerUpdateDTO, ProductDTO, CategoryDTO, OrderDTO, CreateOrderDTO } from './admin.dto';
//import { CustomerEntity } from 'src/Administration/entities/customer.entity';
import { AuthGuard } from './auth/auth.gaurd';
import { Request } from 'express';

import { get } from 'http';
import { AuthService } from './auth/auth.service';
import { CustomerEntity } from './entities/customer.entity';
import { CategoryEntity } from './entities/category.entity';
import { ProductEntity } from './entities/product.entity';


@Controller('admin')
@UseGuards(AuthGuard)
//@UseGuards(SessionGuard)
export class AdminController {
  //authService: any;
  constructor(
    private readonly adminService: AdminService,
    private readonly authService: AuthService, // Inject AuthService here
  ) {}

  

//? Admin

  @Patch('update/:id')
  @UsePipes(new ValidationPipe())
  async updateAdmin(@Param('id') id: number, @Body() adminUpdateDTO: AdminUpdateDTO): Promise<AdminEntity> {
  const updatedAdmin = await this.adminService.updateAdmin(id, adminUpdateDTO);
   return updatedAdmin;
  }

  @Post('send')
  async sendEmail(): Promise<void> {
    await this.adminService.sendEmail();
  }

  @Post('logout')
  @UseGuards(AuthGuard)
  async logout(@Req() request: Request): Promise<{ access_token: string }> {
    const token = request.headers.authorization.split(' ')[1]; // Extract the token from the Authorization header
    return await this.authService.logout(token); // Call the logout method from the AuthService and return the new token
  }
  

//? Customers
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

  @Get('customer/:id')
  async getCustomerById(@Param('id') id: number): Promise<CustomerEntity> {
    return await this.adminService.getCustomerById(id);
  }

  @Delete('customer/:id')
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

//? Categories

@Post('addcategory')
@UsePipes(new ValidationPipe())
async createCategory(@Body() categoryDTO: CategoryDTO): Promise<CategoryEntity> {
  return await this.adminService.createCategory(categoryDTO);
}

@Get('allcategory')
getCategories(): object{
	return this.adminService.getCategories();
}

@Get('category/:id')
getCategoriesById(@Param('id') id: number): object{
    return this.adminService.getCategoriesById(id);
}

@Delete('category/:id')
  async deleteCategoryById(@Param('id') id: number): Promise<string> {
    try {
      return await this.adminService.deleteCategoryById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

//? Products

@Post('addproduct')
async createProduct(@Body() productDTO: ProductDTO) {
  try {
    const product = await this.adminService.createProduct(productDTO);
    return {
      message: 'Product created successfully',
      product,
    };
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  }
}

@Get('allproducts')
getProducts(): object{
	return this.adminService.getProducts();
}

@Get('product/:id')
getProductsById(@Param('id') id: number): object{
    return this.adminService.getProductsById(id);
}

@Delete('product/:id')
  async deleteProductById(@Param('id') id: number): Promise<string> {
    try {
      return await this.adminService.deleteProductById(id);
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




//? Orders

// @Get('allorders')
// async getAllOrders(): Promise<OrderEntity[]> {
//   return await this.adminService.getAllOrders();
// }
// @Post('customers/:id/addorder')
//   async createOrder(@Param('id') id: number): Promise<any> {
//     try {
//       const order = await this.adminService.createOrder(id);
//       return { success: true, order };
//     } catch (error) {
//       if (error instanceof NotFoundException) {
//         throw new NotFoundException(error.message);
//       }
//       throw error;
//     }
//   }

// @Post('customers/:id/addorder')
// @UsePipes(new ValidationPipe())
//   async createOrder(@Param('id') customerId: number, @Body() orderDTO: CreateOrderDTO) {
//     try {
//       const order = await this.adminService.createOrder(customerId, orderDTO);
//       return order;
//     } catch (error) {
//       throw new UnauthorizedException(error.message);
//     }
//   }




}



