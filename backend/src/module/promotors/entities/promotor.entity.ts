import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Promotor')
export class Promotor {
  @PrimaryGeneratedColumn({ name: 'Promotor' })
  id: number;

  @Column({ name: 'Nombre' })
  name: string;

  @Column({ name: 'estado' })
  status: boolean;
}
