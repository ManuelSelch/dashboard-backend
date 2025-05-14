import { Injectable } from "@nestjs/common";
import { JsonRepository } from "src/shared/infra/json.repository";

@Injectable()
export class CustomerRepository extends JsonRepository<Customer> {
    constructor() {
        super("./data/customers.json")
    }
}
