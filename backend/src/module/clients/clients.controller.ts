import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByName(
    @Query('query') query: string,
    @Query('promotor') promotor: number,
    @Request() req,
  ) {
    return this.clientsService.findSelect(
      query,
      req.user.country,
      req.user.distCode,
      promotor,
    );
  }
}
