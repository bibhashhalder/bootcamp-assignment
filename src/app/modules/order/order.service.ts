import { TOrder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderFromDB =async(order:TOrder)=>{
    const result = await orderModel.create(order);
    return result;
};
export const orderService ={
    createOrderFromDB
}