import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductsModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
