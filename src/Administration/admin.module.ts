import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/Customer/customer.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [ TypeOrmModule.forFeature([AdminEntity, CustomerEntity]),
  JwtModule.register({
    global: true,
    secret: "3NP_Backend_Admin",
    signOptions: { expiresIn: '30m' },
  }),
],
  controllers: [AdminController],
  providers: [AdminService, AuthService],
  exports:[AdminService]
})
export class AdminModule {}