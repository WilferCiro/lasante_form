import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ListaDetalle')
export class ListaDetalle {
  @PrimaryGeneratedColumn({ name: 'IdLista' })
  idList: number;

  @Column({ name: 'Producto' })
  product: number;
}
