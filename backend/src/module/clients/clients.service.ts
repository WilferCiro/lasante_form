import { Client } from './entities/client.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface PropsParams {
  country: string;
  distCode: number;
  promotor: number;
  name?: string;
}

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private repository: Repository<Client>,
  ) {}

  async findSelect(
    query: string,
    country: string,
    distCode: number,
    promotor: number,
  ) {
    let sql =
      'Client.Pais=:country and Client.Distribuidor=:distCode and Client.Promotor=:promotor and Client.estado=1';
    let params: PropsParams = {
      country: country,
      distCode: distCode,
      promotor: promotor,
    };
    if (query.length > 0) {
      sql += ' and Client.ClienteNombre LIKE :name';
      params = { ...params, name: '%' + query + '%' };
    }
    const data = await this.repository
      .createQueryBuilder('Client')
      .where(sql, params)
      .getMany();
    return data.map((d: { id: string; name: string; idList: number }) => ({
      label: d.name,
      value: d.id,
      extra: { idList: d.idList },
    }));
  }
}
