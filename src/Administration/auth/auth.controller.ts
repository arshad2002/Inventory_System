import { Body, Controller, Post,UsePipes, UseInterceptors, UploadedFile, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminDTO, loginDTO } from 'src/Administration/admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import * as bcrypt from 'bcrypt';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
    @UsePipes(new ValidationPipe)
    async addUser(@Body() myobj: AdminDTO): Promise<AdminDTO> {
      const salt = await bcrypt.genSalt();
      const hashedpassword = await bcrypt.hash(myobj.password, salt); 
      myobj.password= hashedpassword;
        return this.authService.signUp(myobj);
    }
  @Post('login')
  signIn(@Body() logindata: loginDTO) {
    return this.authService.signIn(logindata);
  }

 
}