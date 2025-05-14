import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomerRepository } from './infra/customer.repository';

@Module({
  controllers: [CustomersController],
  providers: [CustomerRepository]
})
export class CustomersModule {}
