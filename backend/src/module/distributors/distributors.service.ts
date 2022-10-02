import { Injectable } from '@nestjs/common';

@Injectable()
export class DistributorsService {
  findSelect(query: string) {
    return [
      {
        value: 1,
        label: query,
      },
    ];
  }
}
