import { PartialType } from "@nestjs/mapped-types";

export class CreateProductDto {
    id: number;
    name: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}