import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  username: string;
}
