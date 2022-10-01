import { Injectable } from '@nestjs/common';

@Injectable()
export class PromotorsService {

  findByName(query: string) {
    return [
      {
        label: "Juan perez",
        value: 1
      },
      {
        label: "Juan Lopez",
        value: 2
      }
    ];
  }
}
