import express from 'express'
import { productController } from './product.controller'
const router =express.Router()
// will call controller 
router.post('/',productController.createProduct)
router.get('/',productController.getAllProduct)
router.get('/:productId', productController.getSingleProduct)
export const productRoute = router