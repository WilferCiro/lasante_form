import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PromotorsService } from './promotors.service';

@Controller('promotors')
export class PromotorsController {
  constructor(private readonly promotorsService: PromotorsService) {}

  @Get()
  findByName(@Query('query') query: string) {
    return this.promotorsService.findByName(query);
  }

}
