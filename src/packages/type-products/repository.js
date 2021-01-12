import typeModel from './model'

async function create(data) {
  return typeModel.create(data)
}
async function update(id, data) {
  return typeModel.findByIdAndUpdate(id, data, { new: true })
}
async function destroy(id) {
  return typeModel.findByIdAndRemove(id)
}
async function getAll() {
  return typeModel.find()
}
export default {
  create,
  update,
  destroy,
  getAll
}