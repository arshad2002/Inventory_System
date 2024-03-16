/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { TransactionEntity } from './Entities/product.entity';
import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { TransactionDTO } from './transactionDTO';
// import { TransactionEntity } from './employeeEntity';
// import { TransactionDTO } from './employeeDTO';
// import { EmployeeDTO } from './managerDTO';
// import { CategoryEntity } from './Entities/category.entity';
// import { CategoryDTO } from './Category/categoryDTO';
// import { SupplierEntity } from './Entities/supplier.entity';
// import { AdminEntity } from './admin.entity';
// import { Repository } from 'typeorm';
// import { AdminDTO } from './adminDTO';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(TransactionEntity) private transactionRepo: Repository<TransactionEntity>) { }
  
  
  async Transaction(transactionInfo: TransactionDTO): Promise<TransactionDTO> {
    return this.transactionRepo.save(transactionInfo);
  }

  async getAllTransaction(): Promise<TransactionEntity[]> {
    return await this.transactionRepo.find();
  }

  async getTransactionById(Transaction_id: number): Promise<TransactionEntity> {
    const product = await this.transactionRepo.findOneBy({Transaction_id});
    if (!product) {
      throw new NotFoundException('employee not found');
    }
    return product;
  }

  async modifyTransaction(Transaction_id: number, updateTransaction: TransactionDTO): Promise<TransactionDTO> {
    await this.transactionRepo.update(Transaction_id, updateTransaction);
    return this.transactionRepo.findOneBy({Transaction_id:Transaction_id}); }


}
