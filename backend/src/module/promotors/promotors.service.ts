import { Promotor } from './entities/promotor.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

interface PropsParams {
  country: string;
  distCode: number;
  name?: string;
}

@Injectable()
export class PromotorsService {
  constructor(
    @InjectRepository(Promotor) private repository: Repository<Promotor>,
  ) {}

  async findSelect(query: string, country: string, distCode: number) {
    let sql =
      'Promotor.Pais=:country and Promotor.BC=:distCode and Promotor.status=1';
    let params: PropsParams = {
      country: country,
      distCode: distCode,
    };
    if (query.length > 0) {
      sql += ' and Promotor.Nombre LIKE :name';
      params = { ...params, name: '%' + query + '%' };
    }
    const data = await this.repository
      .createQueryBuilder('Promotor')
      .where(sql, params)
      .getMany();
    return data.map((d: { id: number; name: string }) => ({
      label: d.name,
      value: d.id,
    }));
  }
}
