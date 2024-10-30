import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';

const products = [
    {"id": 1, "name": "Dishes"}, 
    {"id": 2, "name": "Sofa"}, 
    {"id": 3, "name": "TV"}
]

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) {}
    getProducts() {
        return this.prisma.product.findMany()
    }

    findProduct(id: number) {
        return this.prisma.product.findUnique({where: {id}})
    }

    createProduct(createProductDto: CreateProductDto) {
        return this.prisma.product.create({data: createProductDto});
    }

    updateProduct(id: number, updateProductDto: UpdateProductDto) {
        return this.prisma.product.update({where: {id}, data: updateProductDto});
    }

    deleteProduct(id: number) {
        return this.prisma.product.delete({where: {id}})
    }
}
