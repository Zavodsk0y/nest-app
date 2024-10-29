import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    getProducts(): Array<object> {
        return [{"id": 1, "name": "Dishes"}, {"id": 2, "name": "Sofa"}, {"id": 3, "name": "TV"}]
    }
}
