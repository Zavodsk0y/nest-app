import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts()
  }

  @Get(':id')
  findProduct(@Param('id') id: string) {
    return this.productService.findProduct(+id)
  }

  @Post()
  storeProduct(@Body() createProductDto: CreateProductDto) {
  return this.productService.createProduct(createProductDto)
}
}
