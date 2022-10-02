import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SucursalsService } from './sucursals.service';

@Controller('sucursals')
export class SucursalsController {
  constructor(private readonly sucursalsService: SucursalsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByName(
    @Query('query') query: string,
    @Query('client') client: string,
    @Request() req,
  ) {
    return this.sucursalsService.findSelect(query, req.user.country, client);
  }
}
