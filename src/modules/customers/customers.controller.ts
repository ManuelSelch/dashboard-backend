import { Controller, Get } from '@nestjs/common';
import { CustomerRepository } from './infra/customer.repository';

@Controller('customers')
export class CustomersController {
    constructor(
        private customerRepo: CustomerRepository
    ) {}

    @Get("/")
    async findAll() {
        return await this.customerRepo.findAll();
    }
}
