/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length, Matches,IsEmail } from "class-validator";


export class CategoryDTO {
    //name
    Category_id:number;
    @IsString({message:"name must be a string value"})
    
    @Length(0, 100)
    Category_name: string;
    //age
    
    
}