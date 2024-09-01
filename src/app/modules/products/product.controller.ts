/* eslint-disable @typescript-eslint/no-explicit-any */
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
    }catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
          });
       }
}
const getAllProduct =async(req:Request, res:Response)=>{
   try{
    const result = await productService.getAllProductFromDB()
    res.status(200).json({
        success:true,
        message:'Products retrive successfully!',
        data:result
    })
   }catch(err:any){
    res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
   }
}
const getSingleProduct =async(req:Request, res:Response)=>{
    try{
        const {productId} =req.params
        const result = await productService.getASingleProductFrom(productId)
        res.status(200).json({
        success:true,
        message:'Product fetched successfully!',
        data:result
    })
    }catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
          });
       }
}
const deleteProduct =async(req:Request,res:Response)=>{
    try{
        const {deleteId} =req.params;
        console.log(deleteId);
        const result =await productService.deleteProductFromDB(deleteId)
        res.status(200).json({
            success:true,
            message:'Product deleted successfully!',
            data:result
        })
    }catch(err:any){
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
          });
       }
}
export const productController ={
    createProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct
}