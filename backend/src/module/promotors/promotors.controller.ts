import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PromotorsService } from './promotors.service';

@Controller('promotors')
export class PromotorsController {
  constructor(private readonly promotorsService: PromotorsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByName(@Query('query') query: string, @Request() req) {
    return this.promotorsService.findSelect(
      query,
      req.user.country,
      req.user.distCode,
    );
  }
}
