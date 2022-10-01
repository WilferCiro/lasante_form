
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  promotor: number;

  @Column()
  listType: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  createdDate: Date;

  @Column({ default: true })
  isActive: boolean;
}
