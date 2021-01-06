import productRouter from './products/product.router'
import typeRouter from './type-products/type.router'
import cateRouter from './cate-products/cate.router'
import imageRouter from './images/images.router'
import Router from 'express'

const api = Router()

api.use('/api/product', productRouter)
api.use('/api/type', typeRouter)
api.use('/api/category', cateRouter)
api.use('/api/image', imageRouter)

export default api