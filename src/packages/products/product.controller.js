import ProductService from './product.service'
import checkError from '../../utils/checkError'

const productService = new ProductService()
// create a product
async function createProduct(req, res) {
  try {
    // Validate request
    if (!req.body.productName || !req.body.price || !req.body.description || !req.body.productCode) {
      return res.status(400).send({
        message: "All field can not be empty"
      });
    }
    //Check duplicate name
    const products = await productService.FindAll()
    let checkDuplicateName = false
    products.forEach(product => {
      if (product.productName == req.body.productName) {
        checkDuplicateName = true
      }
    });
    if (checkDuplicateName) {
      return res.status(401).send({
        message: "product already exist"
      })
    } else {
      const dataProduct = {
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId,
        images: req.images
      }
      const newProduct = await productService.create(dataProduct)
      return res.status(201).json(newProduct)
    }
  } catch (error) {
    checkError(error, res)
  }
}
// update a product 
async function updateProduct(req, res) {
  try {
    // Validate request
    if (!req.body.productName || !req.body.price || !req.body.description) {
      return res.status(400).send({
        message: "All field can not be empty"
      });
    }
    // waiting handle update image ( researching ) 
    //Check duplicate name
    const products = await productService.FindAll()
    let checkDuplicateName = false
    products.forEach(product => {
      if (product.productName == req.body.productName) {
        checkDuplicateName = true
      }
    });
    if (checkDuplicateName) {
      return res.status(401).send({
        message: "product already exist"
      })
    } else {
      const dataProduct = {
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId,
        images: req.images
      }
      const updateProduct = await productService.update(dataProduct)
      return res.status(201).json(updateProduct)
    }
  } catch (error) {
    checkError(error, res)
  }
}
// get all product
async function findAllProduct(req, res) {
  try {
    const page = parseInt(req.query.page);
    const products = await productService.FindAll(page);
    return res.status(200).json({ status: 200, message: "get products successfully", data: products })
  } catch (error) {
    checkError(error, res)
  }
}
// get all product by categoryId 
async function findAllProductByCategory(req, res) {
  try {
    const categoryId = req.params.categoryId;
    const products = await productService.FindMany(categoryId)
    return res.status(200).json({ status: 200, message: "get products successfully", data: products })
  } catch (error) {
    checkError(error, res)
  }
}
// delete product by productId
async function deleteProduct(req, res) {
  try {
    const productId = req.params.productId;
    await productService.delete(productId)
    return res.status(200).json({ status: 200, message: "delete product successfully" })
  } catch (error) {
    checkError(error, res)
  }
}
// delete all product
async function deleteAllProduct(req, res) {
  try {
    await productService.deleteAllProduct()
    return res.status(200).json({ status: 200, message: "delete all product successfully" })
  } catch (error) {
    checkError(error, res)
  }
}
export default {
  findAllProduct,
  updateProduct,
  createProduct,
  deleteProduct,
  deleteAllProduct,
  findAllProductByCategory
}