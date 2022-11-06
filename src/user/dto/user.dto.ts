import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsEmail()
  @IsNotEmpty()
  public name: string;
}
