import { Controller, Get } from '@nestjs/common';
import { HealtyService } from './healty.service';

@Controller('healty')
export class HealtyController {
  constructor(private readonly healtyService: HealtyService) {}

  @Get()
  isOk() {
    return this.healtyService.getOk();
  }
}
