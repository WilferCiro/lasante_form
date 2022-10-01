import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listtype {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
