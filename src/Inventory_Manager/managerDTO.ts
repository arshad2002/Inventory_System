/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length, Matches,IsEmail, isNotEmpty, IsNotEmpty } from "class-validator";



export class ManagerDTO {
    //name
    id:number;
    @IsString({message:"name must be a string value"})
    
    @Length(0, 100)
    Product_name: string;
    //age
    
    
    Supplier_id : number;
    Unit_price : number;
    StockQuantity : number
    @IsNotEmpty()
    Category_id :number

    
    
}