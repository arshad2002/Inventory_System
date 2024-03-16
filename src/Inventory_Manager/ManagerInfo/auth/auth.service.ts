/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { AdminService } from 'src/Administration/admin.service';
// import { ManagerDTO, loginDTO } from 'src/Administration/admin.dto';
import * as bcrypt from 'bcrypt';
import { ManagerService } from '../managerInfo.service';
import { ManagerDTO, loginDTO } from '../managerInfo.dto';
// import { ManagerEntity } from '../managerInfo.entity';

@Injectable()
export class AuthService {
  constructor(
    private adminService: ManagerService, 
    private jwtService: JwtService
  ) {}

  async signUp(myobj: ManagerDTO): Promise<ManagerDTO> {
    return await this.adminService.createManager(myobj);
  }

  async signIn( logindata:loginDTO): Promise<{ access_token: string }> {
    const user = await this.adminService.findOneBy(logindata);
   if (!user) {
    throw new UnauthorizedException('Invalid credentials. Please check your email and password.');
   }
    const isMatch = await bcrypt.compare(logindata.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid user');
    }
    const payload = logindata;
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

 




}