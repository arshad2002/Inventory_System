/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length, Matches, IsEmail, isNotEmpty, IsNotEmpty } from "class-validator";



export class SupplierDTO {
    //name
    id: number;
    @IsString({ message: "name must be a string value" })
   
    @Length(0, 100)
    Supplier_name: string;
    //age


    @IsNotEmpty()
    Contact: string
    @IsEmail()
    @IsNotEmpty()
    Email: string
    @IsString()
    @IsNotEmpty()
    Address: string



}