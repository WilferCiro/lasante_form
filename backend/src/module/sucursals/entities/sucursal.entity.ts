import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Sucursal')
export class Sucursal {
  @PrimaryGeneratedColumn({ name: 'IdSucursal' })
  id: number;

  @Column({ name: 'Sucursal' })
  name: string;

  @Column({ name: 'Cliente' })
  client: string;

  @Column({ name: 'idPais' })
  country: number;
}
