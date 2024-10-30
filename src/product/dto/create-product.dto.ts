import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;

    @IsNumber()
    price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}