import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Producto')
export class Product {
  @PrimaryGeneratedColumn({ name: 'Producto' })
  id: number;

  @Column({ name: 'Nproducto' })
  name: string;

  @Column({ name: 'estado' })
  status: boolean;
}
