/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length, Matches,IsEmail, isNotEmpty, IsNotEmpty, IsInt } from "class-validator";



export class TransactionDTO {
    
    Transaction_id:number;
    
    
   
    @IsInt()
    Employee_id: number;
   
    
    
    Transaction_type : string;
    @IsInt({message:'amount must be a number'})
    Amount : number;
    
    Date:string;
  
    
    
    
}