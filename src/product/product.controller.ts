import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Array<object> {
    return this.productService.getProducts()
  }

  @Get(':id')
  findProduct(@Param() params: any): Array<object> {
    return this.productService.findProduct(params)
  }
}
