/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length, Matches,IsEmail, isNotEmpty, IsNotEmpty, IsInt } from "class-validator";



export class ManagerDTO {
    //name
    id:number;
    @IsString({message:"name must be a string value"})
    
    @Length(0, 100)
    Product_name: string;
    
    
    @IsInt()
    Supplier_id : number;
    @IsInt()
    Unit_price : number;
    @IsInt()
    StockQuantity : number
    
    
    
}