import express from 'express'
import { productController } from './product.controller'
const router =express.Router()
// will call controller 
router.post('/products',productController.createProduct)
export const productRoute = router