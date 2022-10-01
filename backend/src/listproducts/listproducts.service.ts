import { Injectable } from '@nestjs/common';
import { CreateListproductDto } from './dto/create-listproduct.dto';
import { UpdateListproductDto } from './dto/update-listproduct.dto';

@Injectable()
export class ListproductsService {
  create(createListproductDto: CreateListproductDto) {
    return 'This action adds a new listproduct';
  }

  findAll() {
    return `This action returns all listproducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listproduct`;
  }

  update(id: number, updateListproductDto: UpdateListproductDto) {
    return `This action updates a #${id} listproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} listproduct`;
  }
}
