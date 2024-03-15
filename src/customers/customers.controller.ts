import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    //1
    @Post()
    login(){}
    //2
    @Post()
    signUp(){}
    //3
    @Get("profile")
    profile(){}
    //4
    @Patch("profile/updates")
    profileUpdate(){}
    //5
    @Get("viewProduct")
    viewProduct(){}
    //6
    @Get("searchProduct")
    searchProduct(){}
    //7
    @Post("order")
    orderProduct(){}
    //8
    @Get("cart")
    viewCart(){}
    //9
    @Delete("cart")
    deleteCartProduct(){}
    //10
    @Post("profile/shipAddress")
    shipAddress(){}
    //11
    @Post("wishlist")
    wishlist(){}
    //12
    @Post("review")
    productReview(){}
    //13
    @Post("productReturn")
    productReturn(){}
    //14
    @Get("order/track")
    orderTracking(){}





}