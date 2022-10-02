import { Controller, Get, Query } from '@nestjs/common';
import { DistributorsService } from './distributors.service';

@Controller('distributors')
export class DistributorsController {
  constructor(private readonly distributorsService: DistributorsService) {}

  @Get()
  findAll(@Query('query') query: string) {
    return this.distributorsService.findSelect(query);
  }
}
