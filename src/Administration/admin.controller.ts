import { Controller, Get, Param, Patch, Body, Delete, Post, ValidationPipe, UsePipes, NotFoundException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { AdminDTO, AdminUpdateDTO } from './admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('create')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createAdmin(@Body() adminDTO: AdminDTO): Promise<AdminEntity> {
    return await this.adminService.createAdmin(adminDTO);
  }

  @Patch('update/:id')
  async modifyPhoneNumber(
    @Param('id') id: number,
    @Body() adminUpdateDTO: AdminUpdateDTO,
  ): Promise<AdminEntity> {
    const admin = await this.adminService.modifyPhoneNumber(id, adminUpdateDTO);
    if (!admin) {
      throw new NotFoundException('Admin not found');
    }
    return admin;
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
	@Get('allcustomers')
	getCustomers(): object{
		return this.adminService.getCustomers();
		}
	@Get('customer/:id')
	getCustomersById(@Param('id') id: string): object{
		return this.adminService.getCustomersById(id);
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


