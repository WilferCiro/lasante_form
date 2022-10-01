import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListproductsService } from './listproducts.service';
import { CreateListproductDto } from './dto/create-listproduct.dto';
import { UpdateListproductDto } from './dto/update-listproduct.dto';

@Controller('listproducts')
export class ListproductsController {
  constructor(private readonly listproductsService: ListproductsService) {}

  @Post()
  create(@Body() createListproductDto: CreateListproductDto) {
    return this.listproductsService.create(createListproductDto);
  }

  @Get()
  findAll() {
    return this.listproductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listproductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListproductDto: UpdateListproductDto) {
    return this.listproductsService.update(+id, updateListproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listproductsService.remove(+id);
  }
}
