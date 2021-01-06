import productModel from './product.model'
import ProductService from './product.service'
import checkError from '../../utils/checkError'

const productService = new ProductService()

async function createProduct(req, res) {
  try {
    // Validate request
    if (!req.body.productName || !req.body.price || !req.body.description) {
      return res.status(400).send({
        message: "All field can not be empty"
      });
    }
    //Check duplicate name
    const products = await productService.FindAll()
    let check = false
    products.forEach(product => {
      if (product.productName == req.body.productName) {
        check = true
      }
    });
    if (check) {
      return res.status(401).send({
        message: "product already exist"
      })
    } else {
      const dataProduct = {
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        cateId: req.body.cateId,
        images: req.images
      }
      const newProduct = await productService.create(dataProduct)
      return res.status(201).json(newProduct)
    }
  } catch (error) {
    checkError(error, res)
  }
}
async function findAllProduct(req, res) {
  try {
    const products = await productService.FindAll();
    return res.status(200).json(products)
  } catch (error) {
    throw (error)
  }
}
export default {
  findAllProduct,
  createProduct
}