import { Injectable } from '@nestjs/common';

@Injectable()
export class BranchOfficeService {
  findSelect(query: string) {
    return [
      {
        label: query,
        value: 1,
      },
      {
        label: 'Juan Lopez',
        value: 2,
      },
    ];
  }
}
