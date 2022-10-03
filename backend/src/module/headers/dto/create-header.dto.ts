import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  ammount: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  quantity: string;
  @IsNotEmpty()
  sucursal: string;
}
export class CreateHeaderDto {
  @IsNotEmpty()
  client: string;
  @IsNotEmpty()
  cutType: string;
  @IsNotEmpty()
  distCode: number;
  @IsNotEmpty()
  distName: string;
  @IsNotEmpty()
  idList: number;
  @IsNotEmpty()
  promotor: string;
  @IsNotEmpty()
  range_date: string[];
  @IsNotEmpty()
  products: CreateProductDto[];
}
