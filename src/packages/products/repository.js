import productModel from './model'
import helper from './helper'

async function create(data) {
  return productModel.create(data)
}

async function update(id, data) {
  return productModel.findByIdAndUpdate(id, data, { useFindAndModify: false, new: true })
}

async function updateImage(id, oldListImage, listImageUpdate, listIndexUpdate, listDeleteImageIndex) {
  const newListImage = helper.getUpdateImageData(oldListImage, listImageUpdate, listIndexUpdate, listDeleteImageIndex)
  return productModel.updateOne({ _id: id }, { $set: { images: newListImage } });
}

async function destroy(id) {
  return productModel.findByIdAndRemove(id)
}

async function getByProductId(id) {
  return productModel.findById(id).populate({ path: 'categoryId' }).populate({ path: 'typeId' })
}

async function getProduct(page, PAGE_SIZE) {
  PAGE_SIZE = !PAGE_SIZE ? 8 : PAGE_SIZE;
  const skip = (page) * PAGE_SIZE;
  return productModel.find({}).skip(skip).limit(PAGE_SIZE)
}

async function getProductSearch(typeId, categoryId, keywords, page, PAGE_SIZE) {
  PAGE_SIZE = !PAGE_SIZE ? 8 : PAGE_SIZE;
  const skip = (page) * PAGE_SIZE;
  let products = productModel.find({}).populate({ path: 'categoryId' }).populate({ path: 'typeId' }).sort('updatedAt')
  if (typeId && typeId !== '') {
    products.where('typeId').equals(typeId);
  }
  if (categoryId && categoryId !== '') {
    products.where('categoryId').equals(categoryId);
  }
  if (keywords && keywords !== '') {
    products.find({
      $or: [
        { productName: { $regex: keywords, $options: 'i' } }
      ],
    });
  }
  return productModel.find(products).skip(skip).limit(PAGE_SIZE)
}

async function getAll(typeId, categoryId, keywords, page, PAGE_SIZE) {
  PAGE_SIZE = !PAGE_SIZE ? 8 : PAGE_SIZE;
  const skip = (page) * PAGE_SIZE;
  const products = productModel.find({}).sort('updatedAt');
  if (typeId && typeId !== '') {
    products.where('typeId').equals(typeId);
  }
  if (categoryId && categoryId !== '') {
    products.where('categoryId').equals(categoryId);
  }
  if (keywords && keywords !== '') {
    products.find({
      $or: [
        { productName: { $regex: keywords, $options: 'i' } }
      ],
    });
  }
  return productModel.find(products)
}

async function getByCategory(categoryId) {
  return productModel.find({ categoryId: categoryId }).populate('categoryId')
}

async function destroyByCategory(categoryId) {
  return productModel.deleteMany({ categoryId: categoryId })
}
export default {
  create,
  update,
  destroy,
  getAll,
  getByCategory,
  destroyByCategory,
  getByProductId,
  getProductSearch,
  getProduct,
  updateImage
}