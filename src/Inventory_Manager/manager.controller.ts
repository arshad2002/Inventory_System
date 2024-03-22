/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { ManagerDTO } from './managerDTO';
import { ManagerService } from './manager.service';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
import { CategoryDTO } from './Category/categoryDTO';
import { CategoryService } from './Category/category.service';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ProductEntity } from './Entities/product.entity';
// import { appService } from './admin.service';
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

 
  
  @Post('/fileUpload')
  @UseInterceptors(FileInterceptor('product2',{
    storage : diskStorage({
      destination : './ManagerFiles',
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








  @Get('/getfile/:name')
getImages(@Param('name') name, @Res() res) {
res.sendFile(name,{ root: './ManagerFiles' })
}




@Get('allproducts')
  async getAllProducts(): Promise<ProductEntity[]> {
    return await this.appService.getAllProducts();
  }



@Get('Productname')
  async getProductByName(): Promise<ProductEntity[]> {
    return await this.appService.getProductByName();
  }


  @Get('product/:id')
  async getProductById(@Param('id') id: number): Promise<ProductEntity> {
    return await this.appService.getProductById(id);
  }



  












  

  @Put('product/:id')
  @UsePipes(new ValidationPipe)
  async updateProductById(@Param('id') id: number, @Body() updateProduct: ManagerDTO): Promise<ManagerDTO> {
    return this.appService.updateProductById(id, updateProduct);
  }


  @Delete('product/:id')
  async deleteProductById(@Param('id') id: number): Promise<string> {
    try {
      return await this.appService.deleteProductById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }



}
