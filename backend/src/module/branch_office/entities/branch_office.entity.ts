import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Sucursal')
export class BranchOffice {
  @PrimaryGeneratedColumn({ name: 'IdSucursal' })
  id: number;

  @Column({ name: 'Sucursal' })
  name: string;
}
