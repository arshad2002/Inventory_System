import { Body, Controller, Post, Req, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminDTO, loginDTO } from 'src/Administration/admin.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    @UsePipes(new ValidationPipe())
    async createAdmin(@Body() myobj: AdminDTO): Promise<AdminDTO> {
        return this.authService.signUp(myobj);
    }

    @Post('login')
    signIn(@Body() logindata: loginDTO) {
        return this.authService.signIn(logindata);
    }

}
