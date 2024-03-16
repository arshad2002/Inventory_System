/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post,UsePipes, UseInterceptors, UploadedFile, ValidationPipe, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { ManagerDTO, loginDTO } from 'src/Administration/admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import * as bcrypt from 'bcrypt';
import { ManagerDTO, loginDTO } from '../managerInfo.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myobj: ManagerDTO): Promise<ManagerDTO> {
      const salt = await bcrypt.genSalt();
      const hashedpassword = await bcrypt.hash(myobj.password, salt); 
      myobj.password= hashedpassword;
        return this.authService.signUp(myobj);
    }
  @Post('login')
  signIn(@Body() logindata: loginDTO) {
    return this.authService.signIn(logindata);
  }
  @Post('/file')
  handleUpload():object{
    return {
      message:'file uploaded'
    }
  }


 

 
}