import { Distributor } from '../distributors/entities/distributor.entity';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Distributor)
    private distRepository: Repository<Distributor>,
  ) {}

  async findOne(username: string) {
    const user = await this.userRepository.findOneBy({ username });
    if (!user) {
      return null;
    }
    const distributor = await this.distRepository.findOneBy({
      id: user.distribuitor,
    });
    return { user, distributor };
  }
}
