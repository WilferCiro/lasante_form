import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios')
export class User {
  @PrimaryGeneratedColumn({ name: 'IdUsuario' })
  id: number;

  @Column({ name: 'Usuario' })
  username: string;

  @Column({ name: 'Password' })
  password: string;

  @Column({ name: 'Inactivo' })
  inactive: boolean;

  @Column({ name: 'Distribuidor' })
  distribuitor: number;

  @Column({ name: 'IdPais' })
  country: string;
}
