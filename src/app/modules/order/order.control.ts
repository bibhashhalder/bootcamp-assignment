import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder =async(req:Request,res:Response)=>{
    try{
        const orderProduct =req.body
        const result = await orderService.createOrderFromDB(orderProduct)
        res.status(200).json({
            success:true,
            message:'Order created successfully!',
            data:result
        })
    }catch(error){
        console.log(error);
    }
}
export const orderControlar ={
    createOrder
}