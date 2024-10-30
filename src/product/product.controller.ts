import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
  findProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findProduct(id)
  }

  @Post()
  storeProduct(@Body() createProductDto: CreateProductDto) {
  return this.productService.createProduct(createProductDto)
  }

  @Patch(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(id, updateProductDto)
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.deleteProduct(id)
  }
}
