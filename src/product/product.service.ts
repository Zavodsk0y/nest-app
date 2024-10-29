import { Injectable, Logger } from '@nestjs/common';

const products = [
    {"id": 1, "name": "Dishes"}, 
    {"id": 2, "name": "Sofa"}, 
    {"id": 3, "name": "TV"}
]

@Injectable()
export class ProductService {
    getProducts(): Array<object> {
        return products
    }

    findProduct(routeParameter: any): Array<object> {
        return [
            {
                "id": `${routeParameter.id}`, 
                "message": `You are trying to find product with ${routeParameter.id}`, 
                "product": products.find(product => product.id == routeParameter.id)
            }
        ]
    }
}
