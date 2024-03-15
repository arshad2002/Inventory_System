import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerModule } from './Inventory_Manager/manager.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './Inventory_Manager/Category/category.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule,ManagerModule,CategoryModule,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'inventory_managment',
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
