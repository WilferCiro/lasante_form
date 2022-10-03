import { Controller, Post, Body } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { CreateHeaderDto } from './dto/create-header.dto';

@Controller('headers')
export class HeadersController {
  constructor(private readonly headersService: HeadersService) {}

  @Post()
  create(@Body() createHeaderDto: CreateHeaderDto) {
    return this.headersService.create(createHeaderDto);
  }
}
