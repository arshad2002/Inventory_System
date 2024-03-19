import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, Matches, MinLength } from 'class-validator';

export class CustomerDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}