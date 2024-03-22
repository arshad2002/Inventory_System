/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsString, IsBoolean, IsEmail, Matches, IsOptional, MinLength, IsNotEmpty } from 'class-validator';

export class ManagerDTO {
    @IsString()
    @MinLength(4)
    name: string;

    @IsString()
    @IsEmail({}, { message: 'Invalid Email Format' })
    email: string;

    @IsString()
    @MinLength(4)
    password: string;

    @IsString()
    @Matches(/^01\d{9}$/, { message: 'Phone number must start with 01 and be 11 digits long' })
    phone: string;

    
}

export class loginDTO {
  @IsEmail() 
  email: string;
  @IsNotEmpty() 
  password: string; 
}

