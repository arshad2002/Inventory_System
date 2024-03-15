import { IsString, IsBoolean, IsEmail, Matches, IsOptional, MinLength, IsNotEmpty } from 'class-validator';

export class AdminDTO {
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

    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}

export class loginDTO {
  @IsEmail() 
  email: string;
  @IsNotEmpty() 
  password: string; 
}

export class AdminUpdateDTO {
  @IsString()
  @MinLength(4)
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail({}, { message: 'Invalid Email Format' })
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(4, {message:'Password mmust be 4 char long.'})
  @IsOptional()
  password?: string;

  @IsString()
  @Matches(/^01\d{9}$/, { message: 'Phone number must start with 01 and be 11 digits long' })
  @IsOptional()
  phone?: string;
}


export class CustomerDTO{
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
export class CutomerUpdateDTO {
  @IsString()
  @MinLength(4)
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail({}, { message: 'Invalid Email Format' })
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(4, {message:'Password mmust be 4 char long.'})
  @IsOptional()
  password?: string;

  @IsString()
  @Matches(/^01\d{9}$/, { message: 'Phone number must start with 01 and be 11 digits long' })
  @IsOptional()
  phone?: string;
}
