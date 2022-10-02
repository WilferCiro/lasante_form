import { Controller, Get, Query } from '@nestjs/common';
import { BranchOfficeService } from './branch_office.service';

@Controller('branch-office')
export class BranchOfficeController {
  constructor(private readonly branchOfficeService: BranchOfficeService) {}

  @Get()
  findByName(@Query('query') query: string) {
    return this.branchOfficeService.findSelect(query);
  }
}
