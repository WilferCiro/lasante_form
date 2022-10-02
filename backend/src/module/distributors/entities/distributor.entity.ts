import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Distribuidor')
export class Distributor {
  @PrimaryGeneratedColumn({ name: 'Distribuidor' })
  id: number;

  @Column({ name: 'Nombre' })
  name: string;

  @Column({ name: 'estado' })
  status: boolean;
}
