import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cabecera')
export class Header {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'fechaCreacion' })
  createdDate: string;

  @Column({ name: 'fechaInicio' })
  startDate: string;

  @Column({ name: 'fechaFin' })
  endDate: string;

  @Column({ name: 'cliente' })
  client: string;

  @Column({ name: 'tipoCorte' })
  cutType: string;

  @Column({ name: 'idDistribuidor' })
  distCode: number;

  @Column({ name: 'nombreDistribuidor' })
  distName: string;

  @Column({ name: 'idLista' })
  idList: number;

  @Column({ name: 'promotor' })
  promotor: string;
}
