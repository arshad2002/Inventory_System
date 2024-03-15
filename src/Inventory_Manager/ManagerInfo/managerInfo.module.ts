/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { AdminController } from './admin.controller';
// import { ManagerService } from './admin.service';
// import { AdminEntity } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CustomerEntity } from 'src/Customer/customer.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { ManagerEntity } from './managerInfo.entity';
import { ManagerController } from './managerInfo.controller';
import { ManagerService } from './managerInfo.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ManagerEntity]),
  JwtModule.register({
    global: true,
    secret: "3NP_Backend_Admin",
    signOptions: { expiresIn: '30m' },
  }),
],
  controllers: [ManagerController],
  providers: [ManagerService, AuthService],
  exports:[ManagerService]
})
export class ManagerModule2 {}