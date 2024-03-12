import { IsString, IsBoolean, Matches, IsOptional } from 'class-validator';

export class AdminDTO {
    // @IsString()
    fullName: string;

    @IsString()
    @Matches(/^[0-9]{1,11}$/,{message: 'Phone number must be a string of at most 11 digits'})
    phone: string;

    @IsBoolean()
    @IsOptional()
    isActive: boolean;
  id: any;
}

export class AdminUpdateDTO {
    @IsString()
    @Matches(/^[0-9]{1,11}$/,{message: 'Phone number must be a string of at most 11 digits'})
    phone?: string;
}

