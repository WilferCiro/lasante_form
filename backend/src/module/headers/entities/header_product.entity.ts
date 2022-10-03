import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CabeceraProducto')
export class HeaderProduct {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'cabecera' })
  idHeader: number;

  @Column({ name: 'monto' })
  ammount: string;

  @Column({ name: 'producto' })
  description: string;

  @Column({ name: 'unidades' })
  quantity: string;

  @Column({ name: 'sucursal' })
  sucursal: string;
}
