import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerDto } from './dto/customers.dto';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  //1
  @Post()
  login(@Body() customerDto: CustomerDto[]) : object {
    return this.customersService.login(customerDto);
  }
  //2
  @Post('signup')
  @UsePipes(new ValidationPipe())
  signUp(@Body() customerDto: CustomerDto) :object {
    return this.customersService.signUp(customerDto);
  }
  //3
  @Get('profile')
  profile() {}
  //4
  @Patch('profile/updates')
  profileUpdate() {}
  //5
  @Get('viewProduct')
  viewProduct() {}
  //6
  @Get('searchProduct')
  searchProduct() {}
  //7
  @Post('order')
  orderProduct() {}
  //8
  @Get('cart')
  viewCart() {}
  //9
  @Delete('cart')
  deleteCartProduct() {}
  //10
  @Post('profile/shipAddress')
  shipAddress() {}
  //11
  @Post('wishlist')
  wishlist() {}
  //12
  @Post('review')
  productReview() {}
  //13
  @Post('productReturn')
  productReturn() {}
  //14
  @Get('order/track')
  orderTracking() {}

  //15 signOut session use
  // @Get('signout')
  // signout(@Session() session) {
  //   if (session.destroy()) {
  //     return { message: 'you are logged out' };
  //   } else {
  //     throw new UnauthorizedException('invalid actions');
  //   }
  // }
}
