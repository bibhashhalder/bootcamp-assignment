import { model, Schema } from "mongoose";
import { Inventory, IProduct, Variant } from "./products.interface";

const variantSchema = new Schema<Variant>({
    type:String,
    value:String
})
const inventoryschema = new Schema<Inventory>({
    quantity:{
        type:Number,
        required:true
    },
    inStock:{
        type:Boolean,
        required:true
    }
})
const productSchema = new Schema<IProduct>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    variants:{
        type:[variantSchema],
        required:true
    },
    inventory:{
        type:inventoryschema,
        required:true
    }
})

export const productModel =model<IProduct>('product', productSchema)