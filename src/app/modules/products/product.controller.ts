import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async(req:Request, res:Response)=>{
    try{
        const product =req.body
        const result = await productService.createProductIntoDB(product)
        res.status(200).json({
            success:true,
            message: 'Product created successfully!',
            data:result
        })
    }catch(error){
        console.log(error);
    }
}
const getAllProduct =async(req:Request, res:Response)=>{
   try{
    const result = await productService.getAllProductFromDB()
    res.status(200).json({
        success:true,
        message:'Products fetched successfully!',
        data:result
    })
   }catch(error){
    console.log(error);
   }
}
const getSingleProduct =async(req:Request, res:Response)=>{
    try{
        const productId =req.params.productId
        const result = await productService.getASingleProductFrom(productId)
        res.status(200).json({
        success:true,
        message:'Product fetched successfully!',
        data:result
    })
    }catch(error){
        console.log(error);
    }
}
export const productController ={
    createProduct,
    getAllProduct,
    getSingleProduct
}