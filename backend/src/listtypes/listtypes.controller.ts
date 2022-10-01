import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ListtypesService } from './listtypes.service';

@Controller('listtypes')
export class ListtypesController {
  constructor(private readonly listtypesService: ListtypesService) {}

  @Get()
  findByName(@Query('query') query: string) {
    return this.listtypesService.findByName(query);
  }
}
