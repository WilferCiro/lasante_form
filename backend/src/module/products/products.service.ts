import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findSelect(query: string) {
    return [
      {
        value: 1,
        label: query,
      },
    ];
  }
}
