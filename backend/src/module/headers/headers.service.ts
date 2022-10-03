import { HeaderProduct } from './entities/header_product.entity';
import { Header } from './../headers/entities/header.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateHeaderDto } from './dto/create-header.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HeadersService {
  constructor(
    @InjectRepository(Header) private repository: Repository<Header>,
    @InjectRepository(HeaderProduct)
    private repositoryHProduct: Repository<HeaderProduct>,
  ) {}

  async create(createHeaderDto: CreateHeaderDto) {
    const register = await this.repository.save({
      ...createHeaderDto,
      startDate: createHeaderDto['range_date'][0],
      endDate: createHeaderDto['range_date'][1],
      createdDate: new Date().toDateString(),
    });
    const products = createHeaderDto.products;
    const promises = [];
    for (let i = 0; i < products.length; i++) {
      promises.push(
        this.repositoryHProduct.save({
          ...products[i],
          idHeader: register.id,
        }),
      );
    }
    await Promise.all(promises);
    return {
      status: 'ok',
    };
  }
}
