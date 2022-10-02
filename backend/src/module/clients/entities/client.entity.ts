import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ClientePadre')
export class Client {
  @PrimaryGeneratedColumn({ name: 'Cliente' })
  id: string;

  @Column({ name: 'ClienteNombre' })
  name: string;

  @Column({ name: 'idLista' })
  idList: number;

  @Column({ name: 'Pais' })
  country: string;

  @Column({ name: 'Distribuidor' })
  distributor: number;

  @Column({ name: 'Promotor' })
  promotor: number;

  @Column({ name: 'estado' })
  status: boolean;
}
