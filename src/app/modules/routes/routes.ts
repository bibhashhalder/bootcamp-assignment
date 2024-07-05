import express from 'express';
import { productController } from '../products/product.controller';
import { orderControlar } from '../order/order.control';
const router =express.Router();
router.post('/',productController.createProduct)
router.get('/',productController.getAllProduct)
router.get('/:productId',productController.getSingleProduct)
router.post('/',orderControlar.createOrder)
export const mainRouter = router