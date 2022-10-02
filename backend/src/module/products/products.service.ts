import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListaDetalle } from './entities/listadetalle.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private repository: Repository<Product>,
    @InjectRepository(ListaDetalle)
    private repositoryList: Repository<ListaDetalle>,
  ) {}

  async findSelect(query: string, idList: number) {
    const promises = [];
    console.log(idList);
    if (!idList) {
      return [];
    }
    const idProducts = await this.repositoryList.findBy({ idList: idList });
    console.log(idProducts);
    for (let i = 0; i < idProducts.length; i++) {
      const productPromise = this.repository.findOneBy({
        id: idProducts[i].product,
      });
      promises.push(productPromise);
    }
    const data = await Promise.all(promises);
    return data.map((d: { id: number; name: string }) => ({
      label: d.name,
      value: d.id,
    }));
  }
}
