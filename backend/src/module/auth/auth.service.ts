import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.user.password === pass) {
      return user;
    }
    return null;
  }

  async login(userData: any) {
    const { user, distributor } = userData;
    const payload = {
      name: user.username,
      distName: distributor?.name,
      distCode: distributor?.id,
      country: user.country,
    };
    const token = this.jwtService.sign(payload);
    return {
      token,
      ...payload,
    };
  }
}
