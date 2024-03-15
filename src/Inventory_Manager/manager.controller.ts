/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { ManagerDTO } from './managerDTO';
import { ManagerService } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { CategoryDTO } from './Category/categoryDTO';
import { CategoryService } from './Category/category.service';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import { AdminService } from './admin.service';
// import { ManagerDTO } from './adminDTO';
//import { AppService } from './app.service';

@Controller('/products')
export class ManagerController {
  constructor(private readonly appService: ManagerService) { }


  @Post('addProduct')
  @UsePipes(new ValidationPipe)
  async createProduct(@Body() productInfo: ManagerDTO): Promise<ManagerDTO> {
    
   

    
      return this.appService.createNewProduct(productInfo);
   
  }

  // @Post('/file')
  // @UseInterceptors(FileInterceptor('product'))
  // handleUpload(@UploadedFile() product : Express.Multer.File):object{
  //   console.log(product)
  //   return {
  //     message:'file uploaded'
  //   }
  // }






    
  
  @Post('/fileUpload')
  @UseInterceptors(FileInterceptor('product2',{
    storage : diskStorage({
      destination : './uploadedFiles',
      filename : (req,file,callback)=>{
        callback(null,Date.now()+file.originalname)

      }
    })
    
  }))



  handleUploadMultiple(@UploadedFile() product : Array<Express.Multer.File> ):object{
    console.log(product)
    return {
      message:'file uploaded'
    }
  }








  @Get('/getimage/:name')
getImages(@Param('name') name, @Res() res) {
res.sendFile(name,{ root: './uploadedFiles' })
}

//   @Post('/fileMulti')
//   @UseInterceptors(FileFieldsInterceptor([{
//     name : 'product',maxCount :2
//   },
//   {
//     name : 'product2',maxCount:1
//   }
// ]))
//   handleUploadMultiple(@UploadedFiles() product : {product?:Express.Multer.File[],product2?:Express.Multer.File[]}):object{
//     console.log(product)
//     return {
//       message:'file uploaded'
//     }
//   }

  












  
//   @Get()
//   async getAllUsers(): Promise<ManagerDTO[]> {
//     return this.appService.getAllUsers();
//   }
//   @Get(':id')
//   async getUserById(@Param('id') id: number): Promise<ManagerDTO> {
//     return this.appService.getUserById(id);
//   }
//   @Put(':id')
//   @UsePipes(new ValidationPipe)
//   async updateUser(@Param('id') id: number, @Body() updatedUser: ManagerDTO): Promise<ManagerDTO> {
//     return this.appService.updateUser(id, updatedUser);
//   }



  // @Get('/user')
  // getHello(): string {
  //   return this.appService.getHelloB();
  // }
  // @Get('/users/:id')
  // getUserById(@Param('id') id: string): object {
  //   return this.appService.getUserById(id);
  // }
  // @Post('/adduser')
  // addUser(@Body() myobj: object): object {
  //   return this.appService.addUser(myobj);
  // }
}
