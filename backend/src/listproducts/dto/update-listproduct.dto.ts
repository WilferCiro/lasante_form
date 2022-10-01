import { PartialType } from '@nestjs/mapped-types';
import { CreateListproductDto } from './create-listproduct.dto';

export class UpdateListproductDto extends PartialType(CreateListproductDto) {}
