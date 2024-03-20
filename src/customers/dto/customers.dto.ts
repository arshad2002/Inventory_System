import { IsString, IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CustomerDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  filename: string;
}