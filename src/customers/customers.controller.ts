import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Session,
  UnauthorizedException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerDto } from './dto/customers.dto';
import { CustomersService } from './customers.service';
import * as bcrypt from 'bcrypt';
import { CustomerProfileEntity } from './Entity/customerprofile.entity';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Post()
  async login(@Body() customerDto: CustomerDto[], @Session() session:Record<string, any>) : Promise<object> {
    const user = await this.customersService.getUserByEmail(customerDto["email"]);
    if(user){
      const isMatch = await bcrypt.compare(customerDto["password"], user.password);
      if(isMatch){
        session.user = user;
        return {"message" : "Login successfull", user};
      }else{
        return {"message": "Wrong Password"}
      }
    }else{
      return {"message" : "No Customer Found"}
    }    
  }

  @Post('signup')
  @UsePipes(new ValidationPipe())
  signUp(@Body() customerDto: CustomerDto) :object {
    return this.customersService.signUp(customerDto);
  }

  @Post('profile')
  @UsePipes(new ValidationPipe())
  async createProfile(@Body() CustomerProfileEntity: CustomerProfileEntity, @Session() session: Record<string, any>) {
    if (!session.user) {
      throw new UnauthorizedException('User not found. Login first');
    }else{
    CustomerProfileEntity.user = session.user;
    return this.customersService.createProfile(CustomerProfileEntity);
    }
  }
  
  @Get('profile')
  profile(@Session() session:Record<string, any>) {
    return this.customersService.getProfilesById(session.user.user_id);
  }
 
  @Patch('profile')
  profileUpdate(@Body() updatedProfile: Partial<CustomerProfileEntity>, @Session() session: Record<string, any>) {
    const profileId = updatedProfile.profile_id;
    if (!profileId) {
      throw new BadRequestException('Profile ID is required');
    }else{
      return this.customersService.updateProfile(updatedProfile); 
    }
  }



  @Delete('profile/:profileId')
  async deleteProfile(@Param('profileId',ParseIntPipe) profileId: number): Promise<any> {
     const info = await this.customersService.deleteProfile(profileId);
      if(info.affected){
        return {"message" : "Profile deleted successfully"};
      }else{
        throw new InternalServerErrorException('Failed to delete profile');
      }
  }
  
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
  @Get('signout')
  signout(@Session() session) {
    if (session.destroy()) {
      return { message: 'you are logged out' };
    } else {
      throw new UnauthorizedException('invalid actions');
    }
  }
}
