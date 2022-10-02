import { Module } from '@nestjs/common';
import { BranchOfficeService } from './branch_office.service';
import { BranchOfficeController } from './branch_office.controller';

@Module({
  controllers: [BranchOfficeController],
  providers: [BranchOfficeService]
})
export class BranchOfficeModule {}
