import { Injectable } from '@nestjs/common';

@Injectable()
export class ListtypesService {
  findByName(query: string) {
    return [
      {
        label: "tipo 1",
        value: 1
      },
      {
        label: "tipo 2",
        value: 2
      }
    ];
  }
}
