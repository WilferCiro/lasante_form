import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  login(loginUserDto: LoginUserDto) {
    return {
      token: "asd",
      refresh: "asd",
    };
  }

  findOne(id: number) {
    return {
      firstName: "juan",
      lastName: "perez",
      isActive: true,
      id,
    };
  }
}
