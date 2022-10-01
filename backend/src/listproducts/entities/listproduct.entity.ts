import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Listproduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  list: number;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  ammount: number;

  @Column({ default: true })
  isActive: boolean;
}
