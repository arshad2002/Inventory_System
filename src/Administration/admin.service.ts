import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { AdminEntity } from './admin.entity';
import { AdminDTO, AdminUpdateDTO, CategoryDTO, CustomerDTO, CutomerUpdateDTO, OrderDTO, ProductDTO, loginDTO } from './admin.dto';
//import { CustomerEntity } from 'src/Administration/entities/customer.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';
import { CustomerEntity } from './entities/customer.entity';
import { CategoryEntity } from './entities/category.entity';
import { ProductEntity } from './entities/product.entity';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class AdminService {
    findOne(logindata: loginDTO) {
        throw new Error('Method not implemented.');
    }
  // save(customerDTO: CustomerDTO): CustomerEntity | PromiseLike<CustomerEntity> {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(AdminEntity) private adminRepository: Repository<AdminEntity>,
    @InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>,
    @InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
    @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,



    private mailerService: MailerService,
    private jwtService: JwtService

  ) {}

  //? Admin

  async createAdmin(adminDTO: AdminDTO): Promise<AdminEntity> {
    const admin = new AdminEntity();
    admin.name = adminDTO.name;
    admin.phone = adminDTO.phone;
    admin.isActive = adminDTO.isActive;
    admin.email =adminDTO.email;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(adminDTO.password, salt);
    admin.password = hashedPassword;
    return await this.adminRepository.save(admin);
  }

  async updateAdmin(id: number, adminUpdateDTO: AdminUpdateDTO): Promise<AdminEntity> {
    const admin = await this.adminRepository.findOneBy({ id });
    if (!admin) {
      throw new NotFoundException('Admin Not Found !!!');
    }
  
    if (adminUpdateDTO.name) {
      admin.name = adminUpdateDTO.name;
    }
  
    if (adminUpdateDTO.email) {
      admin.email = adminUpdateDTO.email;
    }
  
    if (adminUpdateDTO.password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(adminUpdateDTO.password, salt);
      admin.password = hashedPassword;
    }
  
    if (adminUpdateDTO.phone) {
      admin.phone = adminUpdateDTO.phone;
    }
  
    return await this.adminRepository.save(admin);
  }

  async sendEmail(): Promise<void> {
    await this.mailerService.sendMail({
      to: 'mhmurad19@gmail.com',
      subject: 'Test Email',
      text: 'Yes, Mailer is Working.',
      html:"<h1>Hello, SHaKiB</h1>"
    });
  }

  async findOneBy( logindata:loginDTO): Promise<any> {
    return await this.adminRepository.findOneBy({email:logindata.email});
  }
    
//? Customers

async createCustomer(customerDTO: CustomerDTO): Promise<CustomerEntity> {
  const customer = new CustomerEntity();
  customer.name = customerDTO.name;
  // customer.phone = customerDTO.phone;
  customer.email =customerDTO.email;
  customer.filename =customerDTO.filename;


  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(customerDTO.password, salt);
  customer.password = hashedPassword;


  return await this.customerRepository.save(customer);
}

async updateCustomer(id: number, customerUpdateDTO: CutomerUpdateDTO): Promise<CustomerEntity> {
  const customer = await this.customerRepository.findOneBy({ id });
  if (!customer) {
    throw new NotFoundException('Admin not found');
  }

  if (customerUpdateDTO.name) {
    customer.name = customerUpdateDTO.name;
  }

  if (customerUpdateDTO.email) {
    customer.email = customerUpdateDTO.email;
  }

  if (customerUpdateDTO.password) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(customerUpdateDTO.password, salt);
    customer.password = hashedPassword;
  }

  if (customerUpdateDTO.phone) {
    customer.phone = customerUpdateDTO.phone;
  }

  return await this.customerRepository.save(customer);
}

async getAllCustomers(): Promise<CustomerEntity[]> {
  return await this.customerRepository.find();
}


async getCustomerById(id: number): Promise<CustomerEntity> {
  const customer = await this.customerRepository.findOneBy({id});
  if (!customer) {
    throw new NotFoundException('Customer not found');
  }
  return customer;
}

async deleteCustomerById(id: number): Promise<string> {
  const customer = await this.customerRepository.findOneBy({id});
  if (!customer) {
    throw new NotFoundException('Customer not found');
  }
  await this.customerRepository.remove(customer);
  return 'Customer ' +id+ ' Deleted Successfully';
}

//? Categories

async createCategory(categoryDTO: CategoryDTO): Promise<CategoryEntity> {
  const categories = new CustomerEntity();
  categories.name = categoryDTO.name;
  return await this.categoryRepository.save(categories);
}
async getCategories(): Promise<CategoryEntity[]> {
  return await this.categoryRepository.find();
}


async getCategoriesById(id: number): Promise<CategoryEntity> {
  const customer = await this.categoryRepository.findOneBy({id});
  if (!customer) {
    throw new NotFoundException('Category not found');
  }
  return customer;
}

async deleteCategoryById(id: number): Promise<string> {
  const category = await this.categoryRepository.findOneBy({id});
  if (!category) {
    throw new NotFoundException('Category not found');
  }
  await this.categoryRepository.remove(category);
  return 'Category ' +id+ ' Deleted Successfully';
}

//? Products

async createProduct(productDTO: ProductDTO): Promise<ProductEntity> {
  // Create a new product entity
  const product = new ProductEntity();
  product.name = productDTO.name;
  product.purprice = productDTO.purprice;
  product.sellprice = productDTO.sellprice;
  product.qty = productDTO.qty; // Set the quantity property

  // Find the category by name
  const category = await this.categoryRepository.findOneBy({ name: productDTO.ctg });
  if (!category) {
    throw new NotFoundException('Category not found');
  }

  product.ctg = productDTO.ctg;
  product.category = category;

  return await this.productRepository.save(product);
}

async getProducts(): Promise<ProductEntity[]> {
  return await this.productRepository.find();
}

async getProductsById(id: number): Promise<ProductEntity> {
  const product = await this.productRepository.findOneBy({id});
  if (!product) {
    throw new NotFoundException('Product not found');
  }
  return product;
}

async deleteProductById(id: number): Promise<string> {
  const product = await this.productRepository.findOneBy({id});
  if (!product) {
    throw new NotFoundException('Product not found');
  }
  await this.productRepository.remove(product);
  return 'Product ' +id+ ' Deleted Successfully';
}


//? Accountants
	getAccountants(): object{
		return {message: "List Of All Accountants"}
	}
  getAccountantsById(id: string): object{
    return {message: "Your AccountantID is " + id};
    }


//? Orders

async placeOrder(id: number, orderDTO: OrderDTO): Promise<OrderEntity> {
  // Find the customer by ID
  const customer = await this.customerRepository.findOneBy({ id });
  if (!customer) {
    throw new NotFoundException('Customer not found');
  }

  // Initialize variables
  let totalAmount = 0;
  const products: ProductEntity[] = [];
  
  // Validate products and calculate total amount
  for (const productDTO of orderDTO.products) {
    // Find the product by name
    const product = await this.productRepository.findOneBy({ name: productDTO.name });
    if (!product) {
      throw new NotFoundException(`Product ${productDTO.name} not found`);
    }

    // Validate product quantity
    if (product.qty < productDTO.qty) {
      throw new BadRequestException(`Insufficient quantity for product ${productDTO.name}`);
    }

    // Calculate total amount for the product
    totalAmount += product.sellprice * productDTO.qty;

    // Reduce product quantity in stock
    product.qty -= productDTO.qty;
    products.push(product);
  }

  // Create order entity
  const order = new OrderEntity();
  order.customer = customer;
  order.products = products;
  order.totalAmount = totalAmount;

  // Save order and update product quantities
  const savedOrder = await this.orderRepository.save(order);
  await Promise.all(products.map(product => this.productRepository.save(product)));

  return savedOrder;
}

async getOrdersByCustomerId(customerId: number): Promise<OrderEntity[]> {
  const orders = await this.orderRepository.find({
    where: { customer: { id: customerId } },
    relations: ['customer', 'products'], // Include related entities if needed
  });

  if (!orders || orders.length === 0) {
    throw new NotFoundException('No orders found for the customer');
  }

  return orders;
}

async deleteOrder(id: number): Promise<string> {
  const order = await this.orderRepository.findOneBy({id});
  if (!order) {
    throw new NotFoundException('Order not found');
  }
  await this.orderRepository.remove(order);
  return `Order with ID ${id} has been deleted successfully`;
}


}
