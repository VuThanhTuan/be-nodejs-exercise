import productModel from './model'

async function create(data) {
  return productModel.create(data)
}
async function update(id, data) {
  return productModel.update(id, data, { new: true })
}
async function destroy(id) {
  return productModel.findByIdAndRemove(id)
}
async function getAll(page) {
  const PAGE_SIZE = 10;
  const skip = (page - 1) * PAGE_SIZE;
  return productModel.find({}).skip(skip).limit(PAGE_SIZE)
}
async function getByCategory(categoryId) {
  return productModel.find({ categoryId: categoryId })
}
async function destroyByCategory(categoryId) {
  return productModel.deleteMany({ categoryId: categoryId })
}
async function updateImageSlide(id, data) {
  return productModel.findOneAndUpdate({id}, {})
}
export default {
  create,
  update,
  destroy,
  getAll,
  getByCategory,
  destroyByCategory
}