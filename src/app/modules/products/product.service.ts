import { IProduct } from "./products.interface";
import { productModel } from "./products.model";

const createProductIntoDB = async(product:IProduct)=>{
      const result = await productModel.create(product);
      return result;
}
const getAllProductFromDB =async()=>{
    const result =await productModel.find();
    return result;
}
const getASingleProductFrom = async(_id:string)=>{
    const result =await productModel.findOne({_id:_id});
    return result;
}
export const productService ={
    createProductIntoDB,
    getAllProductFromDB,
    getASingleProductFrom
}