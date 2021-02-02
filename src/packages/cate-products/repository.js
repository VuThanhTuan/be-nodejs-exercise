import cateModel from './model'

async function create(data) {
  return cateModel.create(data)
}
async function update(id, data) {
  return cateModel.findByIdAndUpdate(id, data, { new: true })
}
async function destroy(id) {
  return cateModel.findByIdAndRemove(id)
}
async function getAll() {
  return cateModel.find()
}
async function getByTypeId(typeId) {
  return cateModel.find({typeId: typeId}).sort('createAt')
}
async function destroyByTypeId(typeId) {
  return cateModel.deleteMany({typeId: typeId})
}
export default {
  create,
  update,
  destroy,
  getAll,
  getByTypeId,
  destroyByTypeId
}