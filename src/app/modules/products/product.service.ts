import { IProduct } from "./products.interface";
import { productModel } from "./products.model";

const createProductIntoDB = async(product:IProduct)=>{
      const result = await productModel.create(product)
      return result;
}
export const productService ={
    createProductIntoDB
}