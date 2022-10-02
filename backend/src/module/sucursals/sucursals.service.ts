import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sucursal } from './entities/sucursal.entity';

interface PropsParams {
  country: string;
  client: string;
  name?: string;
}

@Injectable()
export class SucursalsService {
  constructor(
    @InjectRepository(Sucursal) private repository: Repository<Sucursal>,
  ) {}

  async findSelect(query: string, country: string, client: string) {
    let sql = 'Sucursal.idPais=:country and Sucursal.Cliente=:client';
    let params: PropsParams = {
      country: country,
      client: client,
    };
    if (query.length > 0) {
      sql += ' and Sucursal.Sucursal LIKE :name';
      params = { ...params, name: '%' + query + '%' };
    }
    const data = await this.repository
      .createQueryBuilder('Sucursal')
      .where(sql, params)
      .getMany();
    return data.map((d: { id: number; name: string }) => ({
      label: d.name,
      value: d.id,
    }));
  }
}
