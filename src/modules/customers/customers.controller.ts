import { Controller, Get, Param } from '@nestjs/common';
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

    @Get("/:id")
    async findOne(@Param("id") id: number) {
        return await this.customerRepo.findById(id);
    }
}
