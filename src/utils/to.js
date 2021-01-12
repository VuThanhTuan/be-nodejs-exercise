export default (promise) => {
  return promise.then((data) => {
    return [null, data]
  }).catch((error) => {
    try {
      return [JSON.parse(error.message)]
    } catch (e) {
      return [error]
    }
  })
}
