/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length, Matches,IsEmail, isNotEmpty, IsNotEmpty, IsInt } from "class-validator";



export class EmployeeDTO {
    
    id:number;
    @IsString({message:"name must be a string value"})
    
    @Length(0, 100)
    Employee_name: string;
   
    
    
    Position : string;
    HireDate : string;
    @IsInt({message:'salary must be a number'})
    Salary:number;
    Username : string;
    UserType : string
    
    
    
}