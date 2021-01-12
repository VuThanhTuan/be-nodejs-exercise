import { Router } from 'express'
import { typeRouter, cateRouter, productRouter } from './packages/router'

export default () => {
  const api = Router()

  api.use('/api/type', typeRouter)
  api.use('/api/category', cateRouter)
  api.use('/api/product', productRouter)

  return api
}
