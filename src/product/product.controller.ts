import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto/create-product.dto';

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

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(+id, updateProductDto)
  }
}
